const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db');
const authRoutes = require('./auth');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect Database
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(express.static('views'));

// Routes
app.use('/api/auth', authRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
