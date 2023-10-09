
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const rateLimit = require('express-rate-limit');
const Task = require('./models/Task');
const User = require('./models/User');
const taskRoutes = require('./routes/taskRoutes');
const authRoutes = require('./routes/authRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(expressValidator());
app.use(express.json());



// Rate limiting middleware (per-client)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit to 100 requests per client
  handler: (req, res) => {
    res.status(429).json({ error: 'Too many requests from this IP, please try again later' });
  },
});
app.use(limiter);

// Routes
app.use('/auth', authRoutes);
app.use('/tasks', taskRoutes);

// Error handling middleware
app.use(errorMiddleware);

app.listen(PORT,async () => {
    try {
        // MongoDB connection
    mongoose.connect(process.env.mongoUrl);

    } catch (error) {
      console.log(error.message)
    }
  console.log(`Server is running on port ${PORT}`);
});
