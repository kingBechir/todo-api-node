// src/routes/taskRoutes.js

const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// Récupérer toutes les tâches
router.get('/', taskController.getAllTasks);

// Créer une tâche
router.post('/', taskController.createTask);

// Récupérer une tâche par ID
router.get('/:id', taskController.getTaskById);

// Mettre à jour une tâche
router.put('/:id', taskController.updateTask);

// Supprimer une tâche
router.delete('/:id', taskController.deleteTask);

module.exports = router;
