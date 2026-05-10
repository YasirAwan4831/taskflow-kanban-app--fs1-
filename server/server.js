const dotenv = require('dotenv');

// Load environment variables BEFORE importing app
dotenv.config();

const app = require('./app');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 5000;

// ─── Connect to MongoDB, then start server ─────────────────────────────────
const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`🚀 Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
    console.log(`📡 API Base: http://localhost:${PORT}/api`);
  });
};

startServer();

// Handle unhandled promise rejections gracefully
process.on('unhandledRejection', (err) => {
  console.error(`❌ Unhandled Rejection: ${err.message}`);
  process.exit(1);
});
