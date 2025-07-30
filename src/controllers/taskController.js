// src/controllers/taskController.js

const Task = require('../models/tasks');

// Récupérer toutes les tâches
exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Créer une tâche
exports.createTask = async (req, res) => {
  try {
    const task = new Task(req.body);
    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Récupérer une tâche par ID
exports.getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: 'Tâche non trouvée' });
    res.json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Mettre à jour une tâche
exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!task) return res.status(404).json({ message: 'Tâche non trouvée' });
    res.json(task);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Supprimer une tâche
exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ message: 'Tâche non trouvée' });
    res.json({ message: 'Tâche supprimée avec succès' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
