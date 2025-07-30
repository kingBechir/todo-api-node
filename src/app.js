require('dotenv').config(); // Charge les variables d'environnement
const connectDB = require('./config/db'); // Importe la fonction de connexion
connectDB(); // Exécute la connexion

// On importe le framework Express pour créer notre API
const express = require('express');

// On importe Helmet pour sécuriser les en-têtes HTTP
const helmet = require('helmet');

// On importe CORS pour autoriser les requêtes venant d'autres domaines (Cross-Origin)
const cors = require('cors');

// On importe les routes liées aux tâches
const taskRoutes = require('./routes/tasks');

// On importe notre middleware de gestion des erreurs
const errorHandler = require('./middleware/errorHandler');

// On initialise l'application Express
const app = express();

// On utilise les middlewares
app.use(helmet());            // Sécurise les headers HTTP
app.use(cors());              // Autorise les requêtes CORS
app.use(express.json());      // Permet de lire les JSON dans les requêtes

// Route de santé, pour tester si l’API fonctionne
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date() });
});

// On indique que toutes les routes liées aux tâches commencent par /api/tasks
app.use('/api/tasks', taskRoutes);

// On place le gestionnaire d'erreurs à la fin
app.use(errorHandler);

// On lance le serveur sur le port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
// On enregistre toutes les routes liées aux tâches sous le chemin /api/tasks
const taskRoutes = require('./routes/taskRoutes');
app.use('/api/tasks', taskRoutes);
