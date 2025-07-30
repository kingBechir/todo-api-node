// On importe Mongoose pour créer un schéma de données
const mongoose = require('mongoose');

// On définit le schéma de la tâche (Task)
const taskSchema = new mongoose.Schema({
  // Le titre de la tâche : champ requis, de type chaîne, sans espaces inutiles
  title: {
    type: String,
    required: true,
    trim: true
  },
  // Description optionnelle de la tâche
  description: {
    type: String,
    trim: true
  },
  // Statut de la tâche : terminé ou non (par défaut : false)
  completed: {
    type: Boolean,
    default: false
  },
  // Date de création de la tâche (automatique)
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// On crée le modèle Task à partir du schéma
const Task = mongoose.model('Task', taskSchema);

// On exporte le modèle pour pouvoir l’utiliser dans d’autres fichiers
module.exports = Task;
