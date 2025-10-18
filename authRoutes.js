// authRoutes.js
import express from "express";
import { registerUser, loginUser } from "./authController.js"; // note the ./authController.js path

const router = express.Router();

// @route   POST /api/auth/register
// @desc    Register a new user
router.post("/register", registerUser);

// @route   POST /api/auth/login
// @desc    Log in an existing user
router.post("/login", loginUser);

export default router;

