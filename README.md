<div align="center">

<br/>

```
████████╗ █████╗ ███████╗██╗  ██╗███████╗██╗      ██████╗ ██╗    ██╗
╚══██╔══╝██╔══██╗██╔════╝██║ ██╔╝██╔════╝██║     ██╔═══██╗██║    ██║
   ██║   ███████║███████╗█████╔╝ █████╗  ██║     ██║   ██║██║ █╗ ██║
   ██║   ██╔══██║╚════██║██╔═██╗ ██╔══╝  ██║     ██║   ██║██║███╗██║
   ██║   ██║  ██║███████║██║  ██╗██║     ███████╗╚██████╔╝╚███╔███╔╝
   ╚═╝   ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝     ╚══════╝ ╚═════╝  ╚══╝╚══╝
```

### 🗂️ Full-Stack Kanban Task Management App

<br/>

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-20-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-4-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-Auth-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)

![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge)
![Responsive](https://img.shields.io/badge/Responsive-Yes-blue?style=for-the-badge)
![Theme](https://img.shields.io/badge/Theme-Dark-1a1a2e?style=for-the-badge)

<br/>

> **A complete MERN stack Kanban board with JWT authentication, drag & drop, priority management, and a premium dark UI.**

<br/>

[🚀 Quick Start](#-quick-start) · [✨ Features](#-features) · [🔌 API Reference](#-api-reference) · [🛠️ Tech Stack](#%EF%B8%8F-tech-stack) · [📁 Structure](#-project-structure)

<br/>

</div>

---

## 📸 Preview

<div align="center">

| Kanban Board | Login Page | Task Modal |
|---|---|---|
| 🗂️ Drag & Drop Columns | 🔐 JWT Auth | 📝 Rich Task Editor |

</div>

---

## ✨ Features

<table>
<tr>
<td>

### 🔐 Authentication
- JWT-based secure login & register
- Token persistence across sessions
- Role-based access (Admin / User)
- Protected routes on frontend & backend

</td>
<td>

### 🗂️ Kanban Board
- Three columns: **To-Do**, **In Progress**, **Done**
- Full CRUD on every task
- Drag & drop with `@hello-pangea/dnd`
- Move tasks via API PATCH endpoint

</td>
</tr>
<tr>
<td>

### 🎯 Task Management
- **Priority Levels** — Low / Medium / High
- **Due Dates** with overdue highlighting
- **Tags** — comma-separated labels
- **Task Assignment** to any user

</td>
<td>

### 📊 Dashboard & UX
- Live task stats by status
- Toast notifications via `react-hot-toast`
- Fully responsive (mobile + desktop)
- Premium dark theme with smooth animations

</td>
</tr>
</table>

---

## 🚀 Quick Start

### Prerequisites

```bash
node >= 18.x
npm  >= 9.x
MongoDB Atlas account (or local MongoDB)
```

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yasirawan/taskflow-kanban-app.git
cd taskflow-kanban-app
```

### 2️⃣ Install Dependencies

```bash
# Install server dependencies
cd server && npm install

# Install client dependencies
cd ../client && npm install
```

### 3️⃣ Configure Environment Variables

Verify both `.env` files exist:

**`server/.env`**
```env
PORT=5000
MONGO_URI=mongodb+srv://yasirAdmin:...@taskflow-cluster.hvwcksa.mongodb.net/taskflowDB
JWT_SECRET=taskflow_super_secret_jwt_key_2024
JWT_EXPIRE=7d
NODE_ENV=development
```

**`client/.env`**
```env
VITE_API_URL=http://localhost:5000/api
```

### 4️⃣ Run Development Servers

```bash
# Terminal 1 — Backend
cd server
npm run dev
# ✅ Server running at http://localhost:5000

# Terminal 2 — Frontend
cd client
npm run dev
# ✅ Client running at http://localhost:5173
```

---

## 🔌 API Reference

### 🔐 Auth Endpoints

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| `POST` | `/api/auth/register` | 🌐 Public | Register new user |
| `POST` | `/api/auth/login` | 🌐 Public | Login and get JWT |
| `GET` | `/api/auth/me` | 🔒 Private | Get current user |

### 📋 Task Endpoints

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| `GET` | `/api/tasks` | 🔒 Private | Get all tasks |
| `POST` | `/api/tasks` | 🔒 Private | Create new task |
| `GET` | `/api/tasks/:id` | 🔒 Private | Get single task |
| `PUT` | `/api/tasks/:id` | 🔒 Private | Update task |
| `DELETE` | `/api/tasks/:id` | 🔒 Private | Delete task |
| `PATCH` | `/api/tasks/:id/move` | 🔒 Private | Move task (status change) |
| `GET` | `/api/tasks/users` | 🔒 Private | Get all users for assignment |

> 🔒 **Private** routes require `Authorization: Bearer <token>` header.

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| ⚛️ **Frontend** | React 18 + Vite | UI Framework & Build Tool |
| 🎨 **Styling** | Vanilla CSS | Custom Design System |
| 🟢 **Runtime** | Node.js 20 | JavaScript Runtime |
| 🚂 **Server** | Express 4 | REST API Framework |
| 🍃 **Database** | MongoDB + Mongoose | NoSQL Data Storage |
| 🔐 **Auth** | JWT + bcryptjs | Authentication & Hashing |
| 🖱️ **DnD** | @hello-pangea/dnd | Drag & Drop Interactions |
| 📡 **HTTP** | Axios | API Communication |
| 🔔 **Alerts** | react-hot-toast | Toast Notifications |

---

## 📁 Project Structure

```
taskflow-kanban-app/
│
├── 📁 client/                   ← React (Vite) Frontend
│   └── src/
│       ├── 📁 components/
│       │   ├── common/          ← Button, Input, Loader
│       │   ├── layout/          ← Navbar, Sidebar
│       │   └── kanban/          ← Board, Column, TaskCard, TaskModal
│       ├── 📁 context/          ← AuthContext (global auth state)
│       ├── 📁 hooks/            ← useAuth
│       ├── 📁 layouts/          ← MainLayout
│       ├── 📁 pages/            ← Login, Register, Dashboard
│       ├── 📁 services/         ← api.js, authService, taskService
│       ├── 📁 styles/           ← global.css
│       └── 📁 utils/            ← helpers.js, formatDate.js
│
└── 📁 server/                   ← Node.js + Express Backend
    ├── 📁 config/               ← MongoDB connection
    ├── 📁 constants/            ← Enums (status, priority, roles)
    ├── 📁 controllers/          ← authController, taskController
    ├── 📁 middleware/           ← authMiddleware, errorMiddleware
    ├── 📁 models/               ← User.js, Task.js
    ├── 📁 routes/               ← authRoutes, taskRoutes
    ├── 📁 utils/                ← generateToken
    └── 📁 validators/           ← authValidator, taskValidator
```

---

## 🔒 Security Features

- ✅ Passwords hashed with **bcryptjs** (salt rounds: 10)
- ✅ JWT tokens with configurable expiry (`JWT_EXPIRE=7d`)
- ✅ Protected routes via `authMiddleware`
- ✅ Input validation with custom validators
- ✅ Environment variables for all sensitive config

---

## 🚦 Project Status

```
✅ Authentication (Register / Login / JWT)
✅ Kanban Board (To-Do / In Progress / Done)
✅ Drag & Drop (Column-to-Column)
✅ Task CRUD (Create, Read, Update, Delete)
✅ Priority Levels (Low / Medium / High)
✅ Due Dates with Urgency Highlighting
✅ Task Assignment to Users
✅ Tags Support
✅ Stats Dashboard
✅ Responsive Design
✅ Dark Theme
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

<div align="center">

**Made with ❤️ by [Yasir Awan](https://github.com/yasirawan)**

*Built for Teyzix Core Internship · MERN Stack · 2024*

<br/>

![Stars](https://img.shields.io/github/stars/yasirawan/taskflow-kanban-app?style=social)
![Forks](https://img.shields.io/github/forks/yasirawan/taskflow-kanban-app?style=social)

</div>