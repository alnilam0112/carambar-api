const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Carambar API",
      version: "1.0.0",
      description: "API REST de blagues Carambar",
    },
    servers: [
      {
        url: "http://localhost:3000", 
      },
      {
        url: "https://carambar-api.onrender.com", 
      },
    ],
  },
  apis: ["./routes/*.js"], // Swagger va lire les commentaires dans les routes
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
