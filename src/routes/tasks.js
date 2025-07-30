// On importe express pour créer un routeur
const express = require('express');

// On utilise le module uuid pour générer des identifiants uniques
const { v4: uuidv4 } = require('uuid');

// On initialise le routeur d'Express
const router = express.Router();

// Tableau temporaire pour stocker les tâches en mémoire (pas de base de données pour l’instant)
let tasks = [];

/**
 * @route   POST /api/tasks
 * @desc    Créer une nouvelle tâche
 */
router.post('/', (req, res) => {
  const { title, description, status } = req.body;

  // Création d’un nouvel objet tâche avec un identifiant unique
  const newTask = {
    id: uuidv4(),
    title: title || '',
    description,
    status,
    createdAt: new Date(),
    updatedAt: new Date()
  };

  // On ajoute la tâche au tableau
  tasks.push(newTask);

  // On retourne la tâche créée
  res.status(201).json(newTask);
});

/**
 * @route   GET /api/tasks
 * @desc    Récupérer toutes les tâches
 */
router.get('/', (req, res) => {
  res.json(tasks);
});

/**
 * @route   GET /api/tasks/:id
 * @desc    Récupérer une tâche par son ID
 */
router.get('/:id', (req, res) => {
  const task = tasks.find(t => t.id === req.params.id);

  if (!task) {
    return res.status(404).json({ message: 'Tâche non trouvée' });
  }

  res.json(task);
});

/**
 * @route   PUT /api/tasks/:id
 * @desc    Mettre à jour une tâche existante
 */
router.put('/:id', (req, res) => {
  const task = tasks.find(t => t.id === req.params.id);

  if (!task) {
    return res.status(404).json({ message: 'Tâche non trouvée' });
  }

  const { title, description, status } = req.body;

  // Mise à jour des champs
  task.title = title ?? task.title;
  task.description = description ?? task.description;
  task.status = status ?? task.status;
  task.updatedAt = new Date();

  res.json(task);
});

/**
 * @route   DELETE /api/tasks/:id
 * @desc    Supprimer une tâche
 */
router.delete('/:id', (req, res) => {
  const index = tasks.findIndex(t => t.id === req.params.id);

  if (index === -1) {
    return res.status(404).json({ message: 'Tâche non trouvée' });
  }

  // Suppression de la tâche du tableau
  tasks.splice(index, 1);

  res.status(204).send(); // Pas de contenu retourné
});

// On exporte le routeur pour qu’il soit utilisable dans app.js
module.exports = router;
