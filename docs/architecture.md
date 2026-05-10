<div align="center">

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&size=13&pause=1000&color=61DAFB&center=true&vCenter=true&width=600&lines=TaskFlow+System+Architecture;3-Tier+MVC+%7C+MERN+Stack+%7C+JWT+Auth+Flow;Clean+Separation+of+Concerns)](https://git.io/typing-svg)

# 🏗️ TaskFlow — Architecture Overview

**A deep-dive into the system design, data flow, auth strategy, and state management of TaskFlow.**

[![Architecture](https://img.shields.io/badge/Pattern-MVC_3--Tier-61DAFB?style=for-the-badge&logo=blueprint&logoColor=black)]()
[![Stack](https://img.shields.io/badge/Stack-MERN-47A248?style=for-the-badge&logo=mongodb&logoColor=white)]()
[![Auth](https://img.shields.io/badge/Auth-JWT_Bearer-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)]()
[![State](https://img.shields.io/badge/State-React_Context-61DAFB?style=for-the-badge&logo=react&logoColor=black)]()
[![DB](https://img.shields.io/badge/DB-MongoDB_Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)]()

</div>

---

## 📐 System Design

TaskFlow follows a classic **3-Tier MVC Architecture** with a clean, deliberate separation between the **Presentation**, **Business Logic**, and **Data** layers. Each tier communicates over HTTP/JSON with JWT-secured Axios requests.

<br/>

```
╔══════════════════════════════════════════════════════════════════╗
║                TIER 1 — CLIENT  (React + Vite)                  ║
║                                                                  ║
║   ┌────────────┐   ┌──────────────────┐   ┌──────────────────┐  ║
║   │   Pages    │   │   Components     │   │ Context/Services │  ║
║   │────────────│   │──────────────────│   │──────────────────│  ║
║   │ Login      │   │ Board.jsx        │   │ AuthContext      │  ║
║   │ Register   │   │ Column.jsx       │   │ authService      │  ║
║   │ Dashboard  │   │ TaskCard.jsx     │   │ taskService      │  ║
║   │            │   │ TaskModal.jsx    │   │ (Axios + JWT)    │  ║
║   └────────────┘   └──────────────────┘   └──────────────────┘  ║
╚══════════════════════════════╦═══════════════════════════════════╝
                               ║
                  HTTP/JSON — Axios + JWT Bearer Token
                               ║
╔══════════════════════════════╩═══════════════════════════════════╗
║              TIER 2 — SERVER  (Node.js + Express)               ║
║                                                                  ║
║   ┌────────────┐   ┌──────────────┐   ┌────────────────────┐    ║
║   │   Routes   │   │ Controllers  │   │    Middleware       │    ║
║   │────────────│   │──────────────│   │────────────────────│    ║
║   │ authRoutes │   │ authCtrl     │   │ protect (JWT)      │    ║
║   │ taskRoutes │   │ taskCtrl     │   │ errorHandler       │    ║
║   └────────────┘   └──────────────┘   └────────────────────┘    ║
║                                                                  ║
║   ┌────────────────────┐   ┌────────────────────────────────┐   ║
║   │      Models        │   │         Validators             │   ║
║   │────────────────────│   │────────────────────────────────│   ║
║   │ User.js            │   │ authValidator.js               │   ║
║   │ Task.js            │   │ taskValidator.js               │   ║
║   └────────────────────┘   └────────────────────────────────┘   ║
╚══════════════════════════════╦═══════════════════════════════════╝
                               ║
                        Mongoose ODM
                               ║
╔══════════════════════════════╩═══════════════════════════════════╗
║              TIER 3 — DATABASE  (MongoDB Atlas)                 ║
║                                                                  ║
║   Collections :  users  ·  tasks                                ║
║   Indexes     :  tasks(status)  ·  tasks(createdBy)             ║
║   Hosting     :  MongoDB Atlas (Cloud)                          ║
╚══════════════════════════════════════════════════════════════════╝
```

---

## 🔐 Authentication Flow

A step-by-step walkthrough of how JWT authentication works across the full stack.

<br/>

```
┌─────────────────────────────────────────────────────────────────┐
│                     AUTH FLOW — STEP BY STEP                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   STEP 1  →  User POSTs to /api/auth/register or /api/auth/login│
│                                                                 │
│   STEP 2  →  Server validates input via authValidator           │
│              Hashes password with bcrypt (salt rounds: 10)      │
│              Generates a signed JWT token                       │
│              Returns: { user, token }                           │
│                                                                 │
│   STEP 3  →  Client stores JWT in localStorage                  │
│              AuthContext updates global state                   │
│              User is redirected to the Dashboard                │
│                                                                 │
│   STEP 4  →  Every subsequent request attaches:                 │
│              Authorization: Bearer <token>                      │
│              (injected automatically via Axios interceptor)     │
│                                                                 │
│   STEP 5  →  protect middleware verifies token on each request  │
│              Decodes payload → attaches req.user                │
│              Unauthorized requests return 401                   │
│                                                                 │
│   STEP 6  →  On 401 response, Axios interceptor auto-clears     │
│              localStorage and redirects user to /login          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

<br/>

```
CLIENT                         SERVER                      DATABASE
  │                               │                            │
  │── POST /api/auth/login ──────>│                            │
  │                               │── validate input           │
  │                               │── find user ──────────────>│
  │                               │<── user doc ───────────────│
  │                               │── bcrypt.compare()         │
  │                               │── jwt.sign()               │
  │<── { user, token } ───────────│                            │
  │                               │                            │
  │  [store token in localStorage]│                            │
  │                               │                            │
  │── GET /api/tasks ─────────────│                            │
  │   Authorization: Bearer <tok> │                            │
  │                               │── protect middleware        │
  │                               │── jwt.verify()             │
  │                               │── req.user = decoded        │
  │                               │── fetch tasks ────────────>│
  │                               │<── tasks[] ────────────────│
  │<── tasks[] ───────────────────│                            │
  │                               │                            │
```

---

## 🗄️ Data Models

### 👤 User Schema

```javascript
{
  name        : String   — required, display name
  email       : String   — required, unique, indexed
  password    : String   — hashed with bcrypt (never returned in responses)
  role        : String   — enum: [ 'admin', 'user' ]  default: 'user'
  avatar      : String   — optional profile image URL
  createdAt   : Date     — auto-generated timestamp
  updatedAt   : Date     — auto-updated timestamp
}
```

### 📋 Task Schema

```javascript
{
  title       : String   — required, task title
  description : String   — optional, multi-line detail
  status      : String   — enum: [ 'todo', 'in_progress', 'done' ]  default: 'todo'
  priority    : String   — enum: [ 'low', 'medium', 'high' ]        default: 'medium'
  dueDate     : Date     — optional, triggers overdue highlight if past
  createdBy   : ObjectId — ref: User  (required, auto-set from req.user)
  assignedTo  : ObjectId — ref: User  (optional, for task delegation)
  tags        : [String] — optional array of label strings
  createdAt   : Date     — auto-generated timestamp
  updatedAt   : Date     — auto-updated timestamp
}
```

---

## 🧠 Frontend State Strategy

```
┌──────────────────────────────────────────────────────────────┐
│                   STATE MANAGEMENT OVERVIEW                  │
├──────────────────┬───────────────────────────────────────────┤
│  Layer           │  Responsibility                           │
├──────────────────┼───────────────────────────────────────────┤
│  AuthContext     │  Global auth state — user object, JWT     │
│                  │  token, login / logout / register actions │
├──────────────────┼───────────────────────────────────────────┤
│  Local useState  │  Task list managed in Board.jsx           │
│                  │  Optimistic updates for smooth UX         │
├──────────────────┼───────────────────────────────────────────┤
│  No Redux        │  Intentionally omitted — React Context    │
│                  │  is sufficient at this project scale      │
└──────────────────┴───────────────────────────────────────────┘
```

### Why no Redux?
TaskFlow intentionally avoids Redux or Zustand. At this scale, React Context + local `useState` provides everything needed — global auth state, task list management, and optimistic UI updates — without the overhead of an external state library. This keeps the codebase simple, readable, and easy to onboard into.

---

## 🔄 Request Lifecycle

```
Browser Request
      │
      ▼
Axios Instance (client/services/api.js)
      │── attaches Authorization: Bearer <token>   ← interceptor
      │
      ▼
Express Router   (authRoutes / taskRoutes)
      │
      ▼
protect Middleware   (authMiddleware.js)
      │── verifies JWT
      │── attaches req.user
      │
      ▼
Controller   (authController / taskController)
      │── runs business logic
      │── calls Mongoose model
      │
      ▼
MongoDB Atlas
      │── executes query
      │── returns documents
      │
      ▼
Controller   ← formats response
      │
      ▼
JSON Response   { success, data }
      │
      ▼
Axios Response Interceptor
      │── handles 401 → clears token → redirects to /login
      │── passes data to component
      │
      ▼
React Component   → updates state → re-renders UI
```

---

## 📦 Module Dependency Map

```
server.js
  └── app.js
        ├── config/db.js              ← MongoDB Atlas connection
        ├── middleware/errorMiddleware ← global error handler
        ├── routes/authRoutes
        │     └── controllers/authController
        │           ├── models/User
        │           ├── utils/generateToken
        │           └── validators/authValidator
        └── routes/taskRoutes
              └── controllers/taskController
                    ├── models/Task
                    ├── middleware/authMiddleware ← JWT protect
                    └── validators/taskValidator
```

---

## 🌐 Environment Configuration

```
┌─────────────────────────────────────────────────────────┐
│                  ENVIRONMENT VARIABLES                  │
├─────────────────────────┬───────────────────────────────┤
│  server/.env            │  client/.env                  │
├─────────────────────────┼───────────────────────────────┤
│  PORT          5000     │  VITE_API_URL                 │
│  MONGO_URI     Atlas    │  http://localhost:5000/api     │
│  JWT_SECRET    secret   │                               │
│  JWT_EXPIRE    7d       │                               │
│  NODE_ENV      dev      │                               │
└─────────────────────────┴───────────────────────────────┘
```

---

<div align="center">

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&size=12&pause=2000&color=47A248&center=true&vCenter=true&width=500&lines=TaskFlow+Architecture+Docs+%7C+2026;Built+by+Yasir+Awan+for+Teyzix+Core+Internship)](https://git.io/typing-svg)

*Part of the [TaskFlow Kanban App](../README.md) · Full Stack Engineering · Teyzix Core Internship · 2026*

</div>