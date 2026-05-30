# Production-Grade Auth System

A full-stack authentication system built from scratch — no Supabase, no Auth0, no shortcuts.  
Built to understand how auth **actually works** under the hood.

## Stack

| Layer     | Technology                              |
|-----------|-----------------------------------------|
| Backend   | FastAPI, SQLAlchemy, Pydantic, Alembic  |
| Frontend  | React, React Query, Zustand             |
| Database  | PostgreSQL                              |
| Auth      | JWT, Refresh Tokens, OAuth 2.0 (Google) |

## Project Structure

```
auth-system/
├── backend/        # FastAPI application
├── frontend/       # React application
├── docs/           # Architecture notes and learning documentation
├── docker-compose.yml
└── README.md
```

---

## Roadmap

### Phase 0 — Project Setup ✅
- Git init, folder structure, GitHub repo
- Docker Compose for PostgreSQL
- Python virtual environment + FastAPI bootstrap
- React app scaffold

### Phase 1 — Password Auth
**Concepts:** password hashing (bcrypt), salting, why plain-text storage is catastrophic
- User model + Alembic migration
- `POST /auth/signup` — hash and store password
- `POST /auth/login` — verify password, return token

### Phase 2 — JWT Authentication
**Concepts:** stateless auth, sessions vs JWT, token claims, expiry
- JWT generation and verification
- Protected route dependency (`get_current_user`)
- Frontend: store token, attach to every request

### Phase 3 — Refresh Tokens
**Concepts:** short-lived access tokens, refresh token rotation, token families
- Refresh token stored in DB
- `POST /auth/refresh` — issue new access token
- Frontend: silent refresh with React Query interceptors

### Phase 4 — Email Verification
**Concepts:** signed time-limited tokens, email delivery
- Send verification email on signup
- `GET /auth/verify-email?token=...`
- Block login until email is verified

### Phase 5 — Password Reset
**Concepts:** one-time-use tokens, secure reset links
- `POST /auth/forgot-password` → sends reset email
- `POST /auth/reset-password` — validate token, update hash

### Phase 6 — OAuth (Google Login)
**Concepts:** OAuth 2.0 authorization code flow, ID token, provider trust
- Google OAuth backend integration
- Link Google account to existing user
- Frontend: "Sign in with Google" button

### Phase 7 — RBAC (Role-Based Access Control)
**Concepts:** roles, permissions, least privilege principle
- `admin` and `user` roles on the User model
- Role-guard dependencies on routes
- Frontend: hide/show UI based on role

### Phase 8 — Security Hardening
**Concepts:** CSRF, XSS, HttpOnly cookies, rate limiting, security headers
- Move tokens from localStorage to HttpOnly cookies
- Rate limit auth endpoints (slowapi)
- Add security headers (CORS, CSP)

### Phase 9 — Deployment
**Concepts:** Docker, CI/CD, environment secrets, HTTPS
- Dockerize backend and frontend
- GitHub Actions pipeline (lint → test → deploy)
- Deploy to VPS or Render/Railway
- Set up HTTPS with Let's Encrypt

---

## Interview Concepts Covered

- Sessions vs JWT — trade-offs, when to use each
- Password hashing — bcrypt, salting, timing attacks
- Auth flow — the full request lifecycle
- Secure cookies — HttpOnly, SameSite, Secure flags
- CSRF / XSS — how attacks work and how to prevent them
- OAuth 2.0 — the authorization code flow explained
- RBAC — roles, permissions, enforcement layers

---

## Deployment

> Coming in Phase 9. Will be documented with full setup instructions.

---

## Running Locally

> Setup instructions will be added as each phase completes.
