# TaskFlow Architecture Overview

## System Design

TaskFlow follows a classic **3-tier MVC architecture** with a clean separation between presentation, business logic, and data layers.

```
┌──────────────────────────────────────────────────────────┐
│  CLIENT (React + Vite)                                    │
│  ┌──────────┐  ┌────────────┐  ┌──────────────────────┐  │
│  │  Pages   │  │ Components │  │  Context / Services  │  │
│  │ Login    │  │ Board      │  │  AuthContext         │  │
│  │ Register │  │ Column     │  │  authService         │  │
│  │ Dashboard│  │ TaskCard   │  │  taskService (Axios) │  │
│  └──────────┘  └────────────┘  └──────────────────────┘  │
└────────────────────────┬─────────────────────────────────┘
                         │ HTTP/JSON (Axios + JWT Bearer)
┌────────────────────────▼─────────────────────────────────┐
│  SERVER (Node.js + Express)                               │
│  ┌──────────────┐  ┌──────────────┐  ┌────────────────┐  │
│  │   Routes     │  │ Controllers  │  │  Middleware     │  │
│  │ authRoutes   │  │ authCtrl     │  │ protect (JWT)  │  │
│  │ taskRoutes   │  │ taskCtrl     │  │ errorHandler   │  │
│  └──────────────┘  └──────────────┘  └────────────────┘  │
│  ┌──────────────┐  ┌──────────────┐                       │
│  │   Models     │  │  Validators  │                       │
│  │ User.js      │  │ authValidator│                       │
│  │ Task.js      │  │ taskValidator│                       │
│  └──────────────┘  └──────────────┘                       │
└────────────────────────┬─────────────────────────────────┘
                         │ Mongoose ODM
┌────────────────────────▼─────────────────────────────────┐
│  DATABASE (MongoDB Atlas)                                  │
│  Collections: users, tasks                                │
│  Indexes: tasks(status, createdBy)                        │
└───────────────────────────────────────────────────────────┘
```

## Auth Flow

1. User POSTs `/api/auth/register` or `/api/auth/login`
2. Server validates → hashes password (bcrypt) → returns JWT
3. Client stores JWT in `localStorage` via `AuthContext`
4. Every subsequent request attaches `Authorization: Bearer <token>` via Axios interceptor
5. `protect` middleware verifies token → attaches `req.user`
6. On 401 response, Axios interceptor auto-clears storage and redirects to `/login`

## Data Models

### User
```
{ name, email, password(hashed), role(admin|user), avatar, timestamps }
```

### Task
```
{ title, description, status(todo|in_progress|done), priority(low|medium|high),
  dueDate, createdBy(ref:User), assignedTo(ref:User), tags[], timestamps }
```

## Frontend State Strategy
- **AuthContext** – Global auth state (user, token, login/logout/register)
- **Local useState** – Task list managed in `Board.jsx` with optimistic updates
- **No Redux** – Kept intentionally simple; React Context is sufficient at this scale
