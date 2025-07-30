// src/config/db.js

const mongoose = require('mongoose');

// Fonction de connexion à la base MongoDB
const connectDB = async () => {
  try {
    // Connexion avec l'URI en variable d'environnement
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connexion à MongoDB réussie');
  } catch (error) {
    console.error('Erreur de connexion MongoDB :', error.message);
    process.exit(1); // Arrête l'application si la connexion échoue
  }
};

module.exports = connectDB;
