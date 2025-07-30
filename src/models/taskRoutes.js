// src/routes/taskRoutes.js

const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// Routes REST
router.get('/', taskController.getAllTasks);         // GET /api/tasks
router.post('/', taskController.createTask);         // POST /api/tasks
router.get('/:id', taskController.getTaskById);      // GET /api/tasks/:id
router.put('/:id', taskController.updateTask);       // PUT /api/tasks/:id
router.delete('/:id', taskController.deleteTask);    // DELETE /api/tasks/:id

module.exports = router;
