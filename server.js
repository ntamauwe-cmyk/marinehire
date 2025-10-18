// server.js

import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import path from "path";
import { fileURLToPath } from "url";

// Load environment variables
dotenv.config();

const app = express();

// ✅ Fix for Render reverse proxy
app.set("trust proxy", 1);

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// ✅ Rate limiter configuration
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(limiter);

// ✅ MongoDB Connection
const mongoURI = process.env.MONGO_URI || "your_mongo_connection_string_here";

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected:", mongoose.connection.host))
  .catch((err) => console.error("❌ MongoDB connection error:", err.message));

// Example route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Server running securely on Render 🚀" });
});

// ✅ Handle frontend (optional if you’re hosting React frontend on Render)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client", "build")));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

// ✅ Start the server
const PORT = process.env.PORT || 10000;
app.listen(PORT, () =>
  console.log(`✅ Server running securely on port ${PORT}`)
);


