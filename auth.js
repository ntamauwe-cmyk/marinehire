// auth.js
import express from "express";
import { registerUser, loginUser } from "./authController.js"; // Make sure this path is correct

const router = express.Router();

// Register Route
router.post("/register", registerUser);

// Login Route
router.post("/login", loginUser);

export default router;
