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
    origin: "https://marinehire-frontend.onrender.com",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// ✅ Middleware
app.use(express.json());

// ✅ Routes
app.use("/api/auth", authRoutes);

// ✅ Default route for testing
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


