# Carambar API 🍬

API REST de blagues Carambar développée en **Node.js**, **Express**, et **Sequelize**.  
Cette API permet de gérer des blagues (ajout, consultation, récupération aléatoire) pour une utilisation sur une landing page ou une application mobile.

---

##  Technologies utilisées

- Node.js  
- Express.js  
- Sequelize ORM  
- SQLite (base de données légère intégrée)  
- Cors (pour autoriser les requêtes frontend)  
- Swagger (documentation interactive)

---

##  Installation

1. Cloner le repository :

```bash

git clone https://github.com/alnilam0112/carambar-api.git
cd carambar-api

```

2.  Installer les dépendances :

```bash

npm install

``` 

3. Lancer le serveur en mode développement :

```bash

npm run dev

```

4. L’API tourne par défaut sur :

http://localhost:3000

---

## API en ligne

    Render : https://carambar-api-4y6r.onrender.com

    Swagger (documentation interactive) : https://carambar-api-4y6r.onrender.com/swagger

---

## Endpoints principaux

Méthode  |	Endpoint	                 |  Description
GET      |	/api/v1/blagues              |	Récupérer toutes les blagues
GET      |	/api/v1/blagues/{id}	     |  Récupérer une blague par ID
GET	     |  /api/v1/blagues/random/one   |	Récupérer une blague aléatoire
POST     |	/api/v1/blagues	             |  Ajouter une nouvelle blague (JSON : { "question": "...", "answer": "..." })