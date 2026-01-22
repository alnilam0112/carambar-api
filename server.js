// Import de l'application Express configurée (routes, middlewares, etc.)
const app = require("./app");

// Import de l'instance Sequelize qui gère la connexion à la base de données
const sequelize = require("./database/sequelize");

const PORT = 3000;

// Fonction asynchrone auto-exécutée
// Elle permet d'utiliser await sans créer une fonction séparée
(async () => {
  try {
    // Synchronise les modèles Sequelize avec la base de données
    // Crée les tables si elles n'existent pas
    await sequelize.sync();
    console.log("Base de données connectée");

    // Démarre le serveur Express sur le port défini
    app.listen(PORT, () => {
      console.log(`Serveur lancé sur http://localhost:${PORT}`);
    });
  } catch (error) {
    // Capture et affiche toute erreur liée à la base ou au serveur
    console.error("Erreur serveur :", error);
  }
})();
