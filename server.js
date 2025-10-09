// server.js

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js'; // adjust path if needed
import authRoutes from './routes/authRoutes.js'; // adjust path if needed

//  Load environment variables first
dotenv.config();

//  Initialize Express
const app = express();

//  Middleware
app.use(cors());
app.use(express.json());

//  Routes
app.use('/api/auth', authRoutes);

// Connect to MongoDB
connectDB();

//  Start server
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(Server running on port ${PORT});
});
