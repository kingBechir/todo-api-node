// Charge les variables d'environnement depuis le fichier .env
require('dotenv').config();

// Importe la fonction de connexion à MongoDB
const connectDB = require('./config/db');
connectDB(); // Établit la connexion à la base de données

// Importe le framework Express
const express = require('express');

// Importe Helmet pour sécuriser les en-têtes HTTP
const helmet = require('helmet');

// Importe CORS pour autoriser les requêtes cross-origin
const cors = require('cors');

// Importe les routes liées aux tâches
const taskRoutes = require('./routes/taskRoutes');

// Importe le middleware de gestion des erreurs
const errorHandler = require('./middleware/errorHandler');

// Initialise l'application Express
const app = express();

// Applique les middlewares
app.use(helmet());           
app.use(cors());             
app.use(express.json());     // Permet de lire le JSON des requêtes

// Route de test de santé de l'API
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date() });
});

// Enregistre les routes des tâches sous /api/tasks
app.use('/api/tasks', taskRoutes);

// Middleware de gestion des erreurs à placer en dernier
app.use(errorHandler);

// Lance le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
