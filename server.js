const app = require("./app");

// Import de l'instance Sequelize qui gère la connexion à la base de données
const sequelize = require("./database/sequelize");

// Import de swagger
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = 3000;

/**
 * Fonction asynchrone auto-exécutée
 *  Elle permet d'utiliser await sans créer une fonction séparée
 **/
(async () => {
  try {
    // Synchronise les modèles Sequelize avec la base de données
    // Crée les tables si elles n'existent pas
    await sequelize.sync();
    console.log("Base de données connectée");

    app.listen(PORT, () => {
      console.log(`Serveur lancé sur http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Erreur serveur :", error);
  }
})();
