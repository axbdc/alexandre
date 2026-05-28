"""Backend API tests for Alexandre Cosme portfolio."""
import os
import uuid
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "").rstrip("/")
if not BASE_URL:
    # Fallback to frontend/.env at runtime
    from pathlib import Path
    env = Path("/app/frontend/.env").read_text()
    for line in env.splitlines():
        if line.startswith("REACT_APP_BACKEND_URL="):
            BASE_URL = line.split("=", 1)[1].strip().rstrip("/")
            break

API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---------- health/root ----------
class TestHealth:
    def test_root(self, client):
        r = client.get(f"{API}/")
        assert r.status_code == 200
        data = r.json()
        assert "message" in data
        assert "Portfolio" in data["message"] or "portfolio" in data["message"].lower()

    def test_health(self, client):
        r = client.get(f"{API}/health")
        assert r.status_code == 200
        data = r.json()
        assert data.get("status") == "ok"
        assert "time" in data


# ---------- contact ----------
class TestContact:
    def test_create_contact_success(self, client):
        unique = uuid.uuid4().hex[:8]
        payload = {
            "name": f"TEST_User_{unique}",
            "email": f"test_{unique}@example.com",
            "subject": "TEST subject",
            "message": "TEST message body from automated test.",
        }
        r = client.post(f"{API}/contact", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()
        assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
        assert "delivered" in data and isinstance(data["delivered"], bool)
        assert data["name"] == payload["name"]
        assert data["email"] == payload["email"]
        assert data["subject"] == payload["subject"]
        assert data["message"] == payload["message"]
        # Verify persistence via list endpoint
        list_resp = client.get(f"{API}/contact")
        assert list_resp.status_code == 200
        ids = [m["id"] for m in list_resp.json()]
        assert data["id"] in ids

    def test_create_contact_minimal(self, client):
        unique = uuid.uuid4().hex[:8]
        payload = {
            "name": f"TEST_Min_{unique}",
            "email": f"min_{unique}@example.com",
            "message": "Minimal payload (no subject).",
        }
        r = client.post(f"{API}/contact", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["subject"] is None
        assert data["name"] == payload["name"]

    def test_invalid_email(self, client):
        r = client.post(
            f"{API}/contact",
            json={
                "name": "TEST_BadEmail",
                "email": "not-an-email",
                "message": "hello",
            },
        )
        assert r.status_code == 422

    def test_missing_name(self, client):
        r = client.post(
            f"{API}/contact",
            json={"email": "x@example.com", "message": "hello"},
        )
        assert r.status_code == 422

    def test_missing_email(self, client):
        r = client.post(
            f"{API}/contact",
            json={"name": "TEST_NoEmail", "message": "hello"},
        )
        assert r.status_code == 422

    def test_missing_message(self, client):
        r = client.post(
            f"{API}/contact",
            json={"name": "TEST_NoMsg", "email": "x@example.com"},
        )
        assert r.status_code == 422

    def test_empty_name(self, client):
        r = client.post(
            f"{API}/contact",
            json={"name": "", "email": "x@example.com", "message": "hi"},
        )
        assert r.status_code == 422

    def test_list_contact(self, client):
        r = client.get(f"{API}/contact")
        assert r.status_code == 200
        data = r.json()
        assert isinstance(data, list)
        if data:
            sample = data[0]
            assert "id" in sample
            assert "name" in sample
            assert "email" in sample
            assert "message" in sample
            assert "_id" not in sample  # Mongo ObjectId must be excluded
