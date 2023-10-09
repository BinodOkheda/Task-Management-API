// routes/taskRoutes.js

const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const authMiddleware = require('../middleware/authMiddleware'); 

// Get all tasks 
router.get('/', authMiddleware, taskController.getAllTasks);

// Get task by ID 
router.get('/:id', authMiddleware, taskController.getTaskById);

// Create a new task
router.post('/', authMiddleware, taskController.createTask);

// Update task by ID 
router.put('/:id', authMiddleware, taskController.updateTask);

// Delete task by ID 
router.delete('/:id', authMiddleware, taskController.deleteTask);

module.exports = router;