import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import connectDB from "./config/db.js";
import authRoutes from "./auth.js"; 
app.use("/api/auth",authRoutes);

dotenv.config();

const app = express(); // <-- MUST be declared before using it

// Middlewares
app.use(cors({
  origin: "*", // for testing; can replace with frontend URL later
  methods: ["GET","POST","PUT","DELETE"],
  allowedHeaders: ["Content-Type","Authorization"]
}));
app.use(express.json());
app.use(helmet());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/auth", authRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("MarineHire API is running successfully");
});

// Start server
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
