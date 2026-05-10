const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

const app = express();

// ─── Core Middleware ───────────────────────────────────────────────────────
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true,
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// HTTP request logger (development only)
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// ─── Health Check ──────────────────────────────────────────────────────────
// Base API Route 
app.get('/api', (req, res) => {
  res.json({
    success: true,
    message: "TaskFlow Backend is working fine!",
    routes: ["/api/auth", "/api/tasks", "/api/health"]
  });
});

// ─── API Routes ────────────────────────────────────────────────────────────
app.use('/api/auth', authRoutes);  // AUTH API
app.use('/api/tasks', taskRoutes); // TASK API

// ─── Error Handling Middleware (must be last) ──────────────────────────────
app.use(notFound);
app.use(errorHandler);

module.exports = app;
