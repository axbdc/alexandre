# Alexandre Cosme — Portfolio (PRD)

## Original problem statement
"sou designer, preciso de criar um portfolio com os meus trabalhos, todas as empresas andam a pedir, mas queria algo novo, clean, que me destaque, que seja elegante e que seja exclusivo."

## Architecture
- **Frontend**: React 19 + Tailwind + Fontshare fonts (Cabinet Grotesk, Satoshi, Newsreader italic), single-page editorial site, custom cursor, scroll-reveal, language toggle.
- **Backend**: FastAPI (`/api/contact`, `/api/health`, `/api/`) — stores form messages in MongoDB as backup.
- **Email delivery**: Web3Forms client-side (free, no SMTP). Backend store is independent fallback.
- **i18n**: PT/EN toggle via React Context, persisted in localStorage.

## User personas
- Hiring managers / studios evaluating Alexandre's work.
- Direct prospects looking to commission AR, 3D, graphic design, photography, or web work.

## Core requirements (static)
- Bilingual PT/EN with toggle.
- Editorial / luxury aesthetic — warm bone (#F4F2EE) + ink (#1C1B1A) + terracotta accent (#A85B48). No pure black, no pure white.
- Sections: Hero → Selected Works (5 placeholder projects) → About + Tools → Services (6) → Experience (4 roles) → Contact + Footer.
- Functional contact form that delivers email and stores backup in DB.

## What's been implemented (2025-12)
- Full editorial portfolio with custom cursor, scroll-reveal, marquee, asymmetric "tetris" project grid.
- PT/EN content for every string in `/app/frontend/src/data/content.js`.
- Web3Forms client-side delivery + Mongo backup endpoint `/api/contact`.
- Mobile responsive nav with data-testids.
- Backend pytest suite: 10/10 green (`/app/backend/tests/test_portfolio_api.py`).
- Frontend testing agent: 100% pass on iteration 2.

## Prioritized backlog
- **P1** Replace placeholder project images with Alexandre's real work + per-project case study pages.
- **P1** Whitelist preview / production origin in Web3Forms dashboard so direct email delivery works (currently CORS-blocked on free plan from preview origin → falls back to DB store).
- **P2** Add a simple `/admin/messages` route protected by a passcode to view stored contact messages.
- **P2** Add per-project detail pages (`/work/:id`) with image galleries.
- **P2** Add OG image + meta tags for social sharing.
- **P3** Connect a custom domain.
- **P3** Optional: shop / print sales page for sports photography.

## Next tasks
- Swap project covers + copy when Alexandre provides real assets.
- Configure Web3Forms allowed origins.
- Decide on contact admin panel.
