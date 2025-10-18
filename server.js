// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./authRoutes.js";

dotenv.config(); // Load environment variables

const app = express(); // Initialize Express

// ✅ CORS Configuration — allow only your live frontend
app.use(
  cors({
    origin: "https://marinehire-frontend.onrender.com", // your frontend URL on Render
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// ✅ Middleware
app.use(express.json()); // Parse JSON request bodies

// ✅ Routes
// All authentication-related routes start with /api/auth
app.use("/api/auth", authRoutes);

// ✅ Default route (optional: helps test if backend is running)
app.get("/", (req, res) => {
  res.send("MarineHire backend is running successfully 🚀");
});

// ✅ Connect to MongoDB
connectDB();

// ✅ Start server
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});

