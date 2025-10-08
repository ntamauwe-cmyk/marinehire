/ server.js

// Import dependencies
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); // your database connection module

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Middleware (if needed)
app.use(express.json()); // for parsing JSON requests

// Connect to the database
connectDB();

// Define a simple route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Set the port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => console.log(Server running on port ${PORT}));

