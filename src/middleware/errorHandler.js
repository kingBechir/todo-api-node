// Ce middleware va attraper toutes les erreurs qui arrivent dans les routes

// On exporte une fonction spéciale qui gère les erreurs
module.exports = (err, req, res, next) => {
  // Si l’erreur a un code de statut (comme 400 ou 500), on l’utilise
  // Sinon, on renvoie une erreur 500 (erreur serveur)
  const statusCode = err.status || 500;

  // On affiche l’erreur côté console (utile en dev)
  console.error(err);

  // On envoie une réponse JSON avec le message de l’erreur
  res.status(statusCode).json({
    error: {
      message: err.message || 'Erreur interne du serveur'
    }
  });
};
