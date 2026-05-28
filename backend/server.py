from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import asyncio
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone
import requests


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Web3Forms config
WEB3FORMS_ACCESS_KEY = os.environ.get('WEB3FORMS_ACCESS_KEY')
CONTACT_RECIPIENT_EMAIL = os.environ.get('CONTACT_RECIPIENT_EMAIL')

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# ---------- Models ----------
class ContactMessageCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=120)
    email: EmailStr
    subject: Optional[str] = Field(default=None, max_length=200)
    message: str = Field(..., min_length=1, max_length=4000)


class ContactMessage(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    subject: Optional[str] = None
    message: str
    delivered: bool = False
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


# ---------- Routes ----------
@api_router.get("/")
async def root():
    return {"message": "Alexandre Cosme Portfolio API"}


@api_router.get("/health")
async def health():
    return {"status": "ok", "time": datetime.now(timezone.utc).isoformat()}


def _send_via_web3forms(payload: dict) -> bool:
    """Submit message to Web3Forms. Blocking — call via asyncio.to_thread."""
    if not WEB3FORMS_ACCESS_KEY:
        return False
    try:
        resp = requests.post(
            "https://api.web3forms.com/submit",
            json={
                "access_key": WEB3FORMS_ACCESS_KEY,
                "name": payload["name"],
                "email": payload["email"],
                "subject": payload.get("subject")
                or f"New portfolio message from {payload['name']}",
                "message": payload["message"],
                "from_name": "Alexandre Cosme Portfolio",
                "to": CONTACT_RECIPIENT_EMAIL,
                "replyto": payload["email"],
            },
            timeout=15,
        )
        data = resp.json()
        return bool(data.get("success"))
    except Exception as exc:  # noqa: BLE001
        logging.getLogger(__name__).warning("Web3Forms request failed: %s", exc)
        return False


@api_router.post("/contact", response_model=ContactMessage)
async def create_contact_message(payload: ContactMessageCreate):
    msg = ContactMessage(**payload.model_dump())

    # Best-effort: try to forward to Web3Forms from server side. Free plan blocks
    # server-side submissions so this will normally fail — that's fine, the
    # frontend submits the email directly. We still store every message.
    delivered = await asyncio.to_thread(_send_via_web3forms, payload.model_dump())
    msg.delivered = delivered

    doc = msg.model_dump()
    doc["created_at"] = doc["created_at"].isoformat()
    try:
        await db.contact_messages.insert_one(doc)
    except Exception as exc:  # noqa: BLE001
        logging.getLogger(__name__).warning("Mongo insert failed: %s", exc)
    return msg


@api_router.get("/contact", response_model=List[ContactMessage])
async def list_contact_messages():
    items = await db.contact_messages.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    for it in items:
        if isinstance(it.get("created_at"), str):
            it["created_at"] = datetime.fromisoformat(it["created_at"])
    return items


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
