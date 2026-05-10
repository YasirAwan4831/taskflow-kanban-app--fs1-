<div align="center">

<!-- Animated typing header -->
[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&size=14&pause=1000&color=61DAFB&center=true&vCenter=true&width=620&lines=Full-Stack+MERN+Kanban+Application;JWT+Auth+%2B+Drag+%26+Drop+%2B+Dark+UI;Built+for+Teyzix+Core+Internship+%C2%B7+2026)](https://git.io/typing-svg)

<br/>

```
████████╗ █████╗ ███████╗██╗  ██╗███████╗██╗      ██████╗ ██╗    ██╗
╚══██╔══╝██╔══██╗██╔════╝██║ ██╔╝██╔════╝██║     ██╔═══██╗██║    ██║
   ██║   ███████║███████╗█████╔╝ █████╗  ██║     ██║   ██║██║ █╗ ██║
   ██║   ██╔══██║╚════██║██╔═██╗ ██╔══╝  ██║     ██║   ██║██║███╗██║
   ██║   ██║  ██║███████║██║  ██╗██║     ███████╗╚██████╔╝╚███╔███╔╝
   ╚═╝   ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝     ╚══════╝ ╚═════╝  ╚══╝╚══╝
```

**🗂️ Full-Stack Kanban Task Management Application**

*A production-ready MERN stack project — JWT Auth · Drag & Drop · Priority Management · Dark UI*

<br/>

<!-- Tech Stack Badges -->
[![React](https://img.shields.io/badge/React_18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite_5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js_20-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express_4-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB_Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![JWT](https://img.shields.io/badge/JWT_Auth-black?style=for-the-badge&logo=jsonwebtokens&logoColor=white)](https://jwt.io/)

<br/>

<!-- Status & Info Badges -->
[![License: MIT](https://img.shields.io/badge/License-MIT-F7DF1E?style=for-the-badge&logo=opensourceinitiative&logoColor=black)](https://opensource.org/licenses/MIT)
[![Status](https://img.shields.io/badge/Status-Active-00C853?style=for-the-badge&logo=statuspage&logoColor=white)]()
[![Responsive](https://img.shields.io/badge/Responsive-Mobile_%26_Desktop-2196F3?style=for-the-badge&logo=googlechrome&logoColor=white)]()
[![Theme](https://img.shields.io/badge/Theme-Dark_Premium-0D1117?style=for-the-badge&logo=github&logoColor=white)]()
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-FF6B6B?style=for-the-badge&logo=github&logoColor=white)](http://makeapullrequest.com)
[![Made with Love](https://img.shields.io/badge/Made_with-%E2%9D%A4-E91E63?style=for-the-badge)]()

<br/>

<!-- GitHub Stats Badges -->
[![Stars](https://img.shields.io/github/stars/YasirAwan4831/taskflow-kanban-app--fs1-?style=for-the-badge&logo=starship&color=FFD700&logoColor=white)](https://github.com/YasirAwan4831/taskflow-kanban-app--fs1-)
[![Forks](https://img.shields.io/github/forks/YasirAwan4831/taskflow-kanban-app--fs1-?style=for-the-badge&logo=git&color=FF6B6B&logoColor=white)](https://github.com/YasirAwan4831/taskflow-kanban-app--fs1-)
[![Issues](https://img.shields.io/github/issues/YasirAwan4831/taskflow-kanban-app--fs1-?style=for-the-badge&logo=github&color=9C27B0&logoColor=white)](https://github.com/YasirAwan4831/taskflow-kanban-app--fs1-/issues)
[![Last Commit](https://img.shields.io/github/last-commit/YasirAwan4831/taskflow-kanban-app--fs1-?style=for-the-badge&logo=git&color=4CAF50&logoColor=white)](https://github.com/YasirAwan4831/taskflow-kanban-app--fs1-/commits)

<br/>

> 💡 **A complete MERN stack Kanban board** with JWT authentication, real-time drag & drop,
> priority management, user assignment, and a stunning dark UI —
> built to demonstrate production-level full-stack engineering.

<br/>

[⚡ Quick Start](#-quick-start) &nbsp;·&nbsp;
[✨ Features](#-features) &nbsp;·&nbsp;
[🔌 API Reference](#-api-reference) &nbsp;·&nbsp;
[🛠️ Tech Stack](#%EF%B8%8F-tech-stack) &nbsp;·&nbsp;
[📁 Structure](#-project-structure) &nbsp;·&nbsp;
[🔒 Security](#-security-features) &nbsp;·&nbsp;
[🤝 Contributing](#-contributing)

</div>

<br/>

---

## 📸 Preview

<div align="center">

| 🗂️ Kanban Board | 🔐 Login Page | 📝 Task Modal |
|:---:|:---:|:---:|
| Drag & Drop columns with live task counts | Secure JWT authentication form | Rich task creation & editing |
| Priority color indicators per card | Token persists across sessions | Due dates, tags & user assignment |

</div>

---

## ✨ Features

<br/>

### 🔐 Authentication & Access Control
- JWT-based secure **login** and **registration** system
- Token persistence across browser sessions using localStorage
- Role-based access control — **Admin** and **User** roles
- Protected routes enforced on both frontend (React Router) and backend (Express middleware)
- Automatic token expiry with redirect on session end

### 🗂️ Kanban Board
- Three workflow columns: **To-Do** · **In Progress** · **Done**
- Full CRUD on every individual task
- Smooth drag & drop powered by `@hello-pangea/dnd`
- Move tasks between columns via dedicated `PATCH /move` API endpoint
- Live task count per column shown in real-time

### 🎯 Task Management
- **Priority Levels** — `Low` / `Medium` / `High` with distinct color coding
- **Due Dates** — calendar picker with automatic overdue highlighting in red
- **Tags** — comma-separated flexible labels for custom categorization
- **Task Assignment** — assign any task to any registered user
- **Rich descriptions** — full multi-line text support per task

### 📊 Dashboard & UX
- Live statistics dashboard — task counts broken down by status
- Instant toast notifications via `react-hot-toast` (success · error · info)
- Fully responsive layout — works seamlessly on mobile & desktop
- Premium dark theme with subtle glows and smooth CSS transitions
- Loading states and spinner feedback for all async operations

---

## ⚡ Quick Start

### Prerequisites

```bash
node  >=  18.x
npm   >=   9.x
MongoDB Atlas account  (or local MongoDB instance)
```

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yasirawan/taskflow-kanban-app.git
cd taskflow-kanban-app
```

### 2️⃣ Install All Dependencies

```bash
# Backend dependencies
cd server && npm install

# Frontend dependencies
cd ../client && npm install
```

### 3️⃣ Configure Environment Variables

**`server/.env`**
```env
PORT         = 5000
MONGO_URI    = your_mongodb_connection_string
JWT_SECRET   = taskflow_super_secret_jwt_key_2024
JWT_EXPIRE   = 7d
NODE_ENV     = development
```

**`client/.env`**
```env
VITE_API_URL = http://localhost:5000/api
```

### 4️⃣ Start Development Servers

```bash
# Terminal 1 — Backend API Server
cd server
npm run dev
# ✅  Server running → http://localhost:5000

# Terminal 2 — Frontend Dev Server
cd client
npm run dev
# ✅  Client running → http://localhost:5173
```

<br/>

> 🎉 Open `http://localhost:5173` in your browser, register an account and start managing tasks!

---

## 🔌 API Reference

> **Base URL:** `http://localhost:5000/api`
> All 🔒 **Private** routes require: `Authorization: Bearer <your_jwt_token>`

<br/>

### 🔐 Auth Endpoints

| Method | Endpoint | Access | Description |
|:------:|:---------|:------:|:------------|
| `POST` | `/auth/register` | 🌐 Public | Register a new user account |
| `POST` | `/auth/login` | 🌐 Public | Login and receive a JWT token |
| `GET` | `/auth/me` | 🔒 Private | Get the currently authenticated user |

<br/>

### 📋 Task Endpoints

| Method | Endpoint | Access | Description |
|:------:|:---------|:------:|:------------|
| `GET` | `/tasks` | 🔒 Private | Retrieve all tasks for current user |
| `POST` | `/tasks` | 🔒 Private | Create a new task |
| `GET` | `/tasks/:id` | 🔒 Private | Get a single task by ID |
| `PUT` | `/tasks/:id` | 🔒 Private | Update task fields |
| `DELETE` | `/tasks/:id` | 🔒 Private | Permanently delete a task |
| `PATCH` | `/tasks/:id/move` | 🔒 Private | Move task to another column (status change) |
| `GET` | `/tasks/users` | 🔒 Private | Fetch all users for task assignment |

<br/>

### 📦 Sample Request — Create Task

```json
POST /api/tasks
Authorization: Bearer -----------...

{
  "title": "Design the landing page",
  "description": "Create wireframes and final mockups for homepage",
  "priority": "high",
  "dueDate": "2026-06-01",
  "tags": "design, ui, frontend",
  "assignedTo": "664abc123def456ghi789"
}
```

---

## 🛠️ Tech Stack

<div align="center">

| Layer | Technology | Version | Purpose |
|:-----:|:----------:|:-------:|:--------|
| ⚛️ Frontend | React + Vite | 18 / 5 | UI Framework & Lightning-fast Build Tool |
| 🎨 Styling | Vanilla CSS | — | Custom Design System & Animations |
| 🟢 Runtime | Node.js | 20 | Server-side JavaScript Runtime |
| 🚂 Server | Express | 4 | RESTful API Framework |
| 🍃 Database | MongoDB + Mongoose | Atlas | NoSQL Storage & Schema ODM |
| 🔐 Auth | JWT + bcryptjs | — | Token Auth & Password Hashing |
| 🖱️ DnD | @hello-pangea/dnd | latest | Smooth Drag & Drop Interactions |
| 📡 HTTP | Axios | latest | API Communication with Interceptors |
| 🔔 Toasts | react-hot-toast | latest | Real-time User Notifications |
| 🔑 Config | dotenv | latest | Secure Environment Variable Management |

</div>

---

## 📁 Project Structure

```
taskflow-kanban-app/
│
├── 📁 client/                          ← React Frontend (Vite)
│   ├── 📁 dist/                        ← Production Build Output
│   │   ├── 📁 assets/
│   │   │   ├── index-CmcjtMht.css
│   │   │   └── index-DlaUtLd5.js
│   │   └── index.html
│   │
│   ├── 📁 public/
│   │   ├── favicon.svg
│   │   └── icons.svg
│   │
│   └── 📁 src/
│       ├── 📁 assets/                  ← Static Images & Icons
│       │   └── hero.png
│       │
│       ├── 📁 components/              ← Reusable UI Components
│       │   ├── 📁 common/
│       │   │   ├── Button.jsx          ← Styled button component
│       │   │   ├── Input.jsx           ← Form input component
│       │   │   └── Loader.jsx          ← Loading spinner
│       │   ├── 📁 kanban/
│       │   │   ├── Board.jsx           ← Main Kanban board container
│       │   │   ├── Column.jsx          ← Individual column (To-Do, etc.)
│       │   │   ├── TaskCard.jsx        ← Draggable task card
│       │   │   └── TaskModal.jsx       ← Task create / edit modal
│       │   └── 📁 layout/
│       │       ├── Navbar.jsx          ← Top navigation bar
│       │       └── Sidebar.jsx         ← Side navigation panel
│       │
│       ├── 📁 context/
│       │   └── AuthContext.jsx         ← Global auth state (React Context API)
│       │
│       ├── 📁 hooks/
│       │   └── useAuth.js              ← Custom authentication hook
│       │
│       ├── 📁 layouts/
│       │   └── MainLayout.jsx          ← App shell layout wrapper
│       │
│       ├── 📁 pages/
│       │   ├── 📁 auth/
│       │   │   ├── Login.jsx           ← Login page
│       │   │   └── Register.jsx        ← Registration page
│       │   └── 📁 dashboard/
│       │       └── Dashboard.jsx       ← Main dashboard with live stats
│       │
│       ├── 📁 services/                ← API Service Layer (Axios)
│       │   ├── api.js                  ← Axios instance & request interceptors
│       │   ├── authService.js          ← Auth API calls
│       │   └── taskService.js          ← Task CRUD API calls
│       │
│       ├── 📁 styles/
│       │   └── global.css              ← Global styles & CSS custom properties
│       │
│       └── 📁 utils/
│           ├── formatDate.js           ← Date formatting helpers
│           └── helpers.js              ← General utility functions
│
├── 📁 docs/
│   └── architecture.md                 ← System architecture documentation
│
└── 📁 server/                          ← Express Backend (Node.js)
    ├── 📁 config/
    │   └── db.js                       ← MongoDB Atlas connection setup
    │
    ├── 📁 constants/
    │   └── enums.js                    ← Shared enums (status, priority levels)
    │
    ├── 📁 controllers/
    │   ├── authController.js           ← Register / login / getMe logic
    │   └── taskController.js           ← Full task CRUD + move logic
    │
    ├── 📁 middleware/
    │   ├── authMiddleware.js           ← JWT token verification middleware
    │   └── errorMiddleware.js          ← Global async error handler
    │
    ├── 📁 models/
    │   ├── Task.js                     ← Task Mongoose schema & model
    │   └── User.js                     ← User Mongoose schema & model
    │
    ├── 📁 routes/
    │   ├── authRoutes.js               ← /api/auth route definitions
    │   └── taskRoutes.js               ← /api/tasks route definitions
    │
    ├── 📁 utils/
    │   └── generateToken.js            ← JWT token generation utility
    │
    ├── 📁 validators/
    │   ├── authValidator.js            ← Auth input validation rules
    │   └── taskValidator.js            ← Task input validation rules
    │
    ├── app.js                          ← Express app config & middleware setup
    └── server.js                       ← Server entry point
```

---

## 🔒 Security Features

```
┌─────────────────────────────────────────────────────────────┐
│                      SECURITY OVERVIEW                      │
├─────────────────────────────────────────────────────────────┤
│  ✅  bcryptjs password hashing    (salt rounds: 10)         │
│  ✅  JWT tokens with expiry       (default: 7 days)         │
│  ✅  Protected routes via         authMiddleware             │
│  ✅  Custom input validators      on all endpoints          │
│  ✅  Sensitive config via         .env variables             │
│  ✅  CORS configuration           for allowed origins        │
│  ✅  Error handling middleware    no stack trace leaks       │
└─────────────────────────────────────────────────────────────┘
```

---

## 🚦 Project Status

```
╔══════════════════════════════════════════════════════════════════╗
║                        FEATURE CHECKLIST                        ║
╠══════════════════════════════════════════════════════════════════╣
║  ✅  Authentication         Register / Login / JWT               ║
║  ✅  Kanban Board           To-Do / In Progress / Done           ║
║  ✅  Drag & Drop            Column-to-Column task movement       ║
║  ✅  Task CRUD              Create / Read / Update / Delete      ║
║  ✅  Priority Levels        Low / Medium / High                  ║
║  ✅  Due Dates              Overdue urgency highlighting          ║
║  ✅  Task Assignment        Assign to any registered user        ║
║  ✅  Tags Support           Flexible comma-separated labels      ║
║  ✅  Stats Dashboard        Live task counts by status           ║
║  ✅  Toast Notifications    Real-time success / error alerts     ║
║  ✅  Responsive Design      Mobile + Desktop layouts             ║
║  ✅  Dark Theme             Premium dark UI system               ║
╚══════════════════════════════════════════════════════════════════╝
```

---

## 🤝 Contributing

Contributions, issues and feature requests are welcome! Here's how to get started:

```bash
# 1. Fork this repository on GitHub

# 2. Clone your fork locally
git clone https://github.com/YOUR_USERNAME/taskflow-kanban-app.git

# 3. Create a new feature branch
git checkout -b feature/YourAmazingFeature

# 4. Make your changes and commit
git add .
git commit -m "feat: add YourAmazingFeature"

# 5. Push to your fork
git push origin feature/YourAmazingFeature

# 6. Open a Pull Request on GitHub
```

> Please follow the existing code style. Run `npm run lint` before submitting a PR.

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for details.

---

<div align="center">

<!-- Animated footer -->
[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&size=13&pause=2000&color=47A248&center=true&vCenter=true&width=500&lines=Thanks+for+visiting+TaskFlow!;Star+the+repo+if+you+found+it+helpful+%E2%AD%90;Open+to+contributions+and+feedback!)](https://git.io/typing-svg)

<br/>

**Made & Developed with ❤️ by [Yasir Awan](https://yasirawan4831.github.io/futuristic-links-dashboard/)**

*Built for Teyzix Core Internship · Full Stack Eng · 2026*

<br/>

[![Stars](https://img.shields.io/github/stars/YasirAwan4831/taskflow-kanban-app--fs1-?style=for-the-badge&logo=starship&color=FFD700&logoColor=white)](https://github.com/YasirAwan4831/taskflow-kanban-app--fs1-)
[![Forks](https://img.shields.io/github/forks/YasirAwan4831/taskflow-kanban-app--fs1-?style=for-the-badge&logo=git&color=FF6B6B&logoColor=white)](https://github.com/YasirAwan4831/taskflow-kanban-app--fs1-)
[![Watchers](https://img.shields.io/github/watchers/YasirAwan4831/taskflow-kanban-app--fs1-?style=for-the-badge&logo=github&color=61DAFB&logoColor=white)](https://github.com/YasirAwan4831/taskflow-kanban-app--fs1-)

<br/>

![Profile Views](https://komarev.com/ghpvc/?username=YasirAwan4831&color=blueviolet&style=for-the-badge&label=PROFILE+VIEWS)

</div>