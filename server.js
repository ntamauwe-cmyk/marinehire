import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const app = express();

// Security middleware
app.use(helmet());
app.use(cors({ origin: "*" }));
app.use(express.json({ limit: "10kb" }));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests
});
app.use(limiter);

// Test route
app.get("/", (req, res) => {
  res.send("API is running securely...");
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`✅ Server running securely on port ${PORT}`));

