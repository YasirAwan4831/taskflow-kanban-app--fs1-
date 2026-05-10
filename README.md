# TaskFlow – Kanban Task Management App

A complete, professional **MERN stack** Kanban-style task management application built with React (Vite), Node.js, Express, MongoDB, and JWT authentication.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
# Install server dependencies
cd server && npm install

# Install client dependencies
cd ../client && npm install
```

### 2. Environment Variables
Both `server/.env` and `client/.env` are pre-configured. Verify they exist.

**server/.env:**
```
PORT=5000
MONGO_URI=mongodb+srv://yasirAdmin:...@taskflow-cluster.hvwcksa.mongodb.net/taskflowDB
JWT_SECRET=taskflow_super_secret_jwt_key_2024
JWT_EXPIRE=7d
NODE_ENV=development
```

**client/.env:**
```
VITE_API_URL=http://localhost:5000/api
```

### 3. Run Development Servers

**Terminal 1 – Backend:**
```bash
cd server
npm run dev
# Server runs at http://localhost:5000
```

**Terminal 2 – Frontend:**
```bash
cd client
npm run dev
# Client runs at http://localhost:5173
```

---

## 🗂️ Project Structure

```
taskflow-kanban-app/
├── client/                  # React (Vite) Frontend
│   └── src/
│       ├── components/      # Reusable UI components
│       │   ├── common/      # Button, Input, Loader
│       │   ├── layout/      # Navbar, Sidebar
│       │   └── kanban/      # Board, Column, TaskCard, TaskModal
│       ├── context/         # AuthContext (global auth state)
│       ├── hooks/           # useAuth
│       ├── layouts/         # MainLayout
│       ├── pages/           # Login, Register, Dashboard
│       ├── services/        # api.js, authService, taskService
│       ├── styles/          # global.css
│       └── utils/           # helpers.js, formatDate.js
│
└── server/                  # Node.js + Express Backend
    ├── config/              # MongoDB connection
    ├── constants/           # Enums (status, priority, roles)
    ├── controllers/         # authController, taskController
    ├── middleware/          # authMiddleware, errorMiddleware
    ├── models/              # User.js, Task.js
    ├── routes/              # authRoutes, taskRoutes
    ├── utils/               # generateToken
    └── validators/          # authValidator, taskValidator
```

---

## 🔌 API Reference

### Auth Endpoints
| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| POST | `/api/auth/register` | Public | Register new user |
| POST | `/api/auth/login` | Public | Login and get JWT |
| GET | `/api/auth/me` | Private | Get current user |

### Task Endpoints
| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| GET | `/api/tasks` | Private | Get all tasks |
| POST | `/api/tasks` | Private | Create task |
| GET | `/api/tasks/:id` | Private | Get single task |
| PUT | `/api/tasks/:id` | Private | Update task |
| DELETE | `/api/tasks/:id` | Private | Delete task |
| PATCH | `/api/tasks/:id/move` | Private | Move task (status change) |
| GET | `/api/tasks/users` | Private | Get all users for assignment |

---

## ✨ Features

- 🔐 **JWT Authentication** – Secure register/login with token persistence
- 🗂️ **Kanban Board** – Three columns: To-Do, In Progress, Done
- 🖱️ **Drag & Drop** – Move tasks between columns (powered by `@hello-pangea/dnd`)
- 📊 **Stats Dashboard** – Live task count by status
- 🎯 **Priority Levels** – Low / Medium / High with color indicators
- 📅 **Due Dates** – With overdue/today urgency highlighting
- 👥 **Task Assignment** – Assign tasks to any registered user
- 🏷️ **Tags** – Comma-separated task labels
- 🛡️ **Role-based Auth** – Admin / User roles
- 📱 **Responsive** – Works on desktop and mobile
- 🌙 **Dark Theme** – Premium dark UI with smooth animations

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18 + Vite |
| Styling | Vanilla CSS (custom design system) |
| Backend | Node.js + Express |
| Database | MongoDB + Mongoose |
| Auth | JWT + bcryptjs |
| DnD | @hello-pangea/dnd |
| HTTP Client | Axios |
| Notifications | react-hot-toast |

---

## 👤 Author
**Yasir Awan** – Built for Teyzix Core Internship
