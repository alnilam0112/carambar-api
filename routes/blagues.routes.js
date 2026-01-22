const express = require("express");
const router = express.Router();
const Blague = require("../models/blague.model");

/**
 * @swagger
 * /api/v1/blagues:
 *   post:
 *     summary: Ajouter une nouvelle blague
 *     tags:
 *       - Blagues
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               question:
 *                 type: string
 *                 example: "Pourquoi les développeurs aiment le café ?"
 *               answer:
 *                 type: string
 *                 example: "Parce que sans Java, ils plantent."
 *     responses:
 *       201:
 *         description: Blague ajoutée avec succès
 *       400:
 *         description: Champs manquants
 */
router.post("/", async (req, res) => {
  try {
    const { question, answer } = req.body;

    if (!question || !answer) {
      return res.status(400).json({ message: "Champs manquants" });
    }

    const blague = await Blague.create({ question, answer });
    res.status(201).json(blague);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * @swagger
 * /api/v1/blagues:
 *   get:
 *     summary: Récupérer toutes les blagues
 *     tags:
 *       - Blagues
 *     responses:
 *       200:
 *         description: Liste des blagues
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   question:
 *                     type: string
 *                   answer:
 *                     type: string
 */
router.get("/", async (req, res) => {
  try {
    const blagues = await Blague.findAll();
    res.json(blagues);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * @swagger
 * /api/v1/blagues/{id}:
 *   get:
 *     summary: Récupérer une blague par ID
 *     tags:
 *       - Blagues
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la blague
 *     responses:
 *       200:
 *         description: Blague trouvée
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 question:
 *                   type: string
 *                 answer:
 *                   type: string
 *       404:
 *         description: Blague non trouvée
 */
router.get("/:id", async (req, res) => {
  try {
    const blague = await Blague.findByPk(req.params.id);

    if (!blague) {
      return res.status(404).json({ message: "Blague non trouvée" });
    }

    res.json(blague);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * @swagger
 * /api/v1/blagues/random/one:
 *   get:
 *     summary: Récupérer une blague aléatoire
 *     tags:
 *       - Blagues
 *     responses:
 *       200:
 *         description: Une blague aléatoire
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 question:
 *                   type: string
 *                 answer:
 *                   type: string
 */
router.get("/random/one", async (req, res) => {
  try {
    const count = await Blague.count();
    const randomIndex = Math.floor(Math.random() * count);

    const blague = await Blague.findOne({ offset: randomIndex });

    res.json(blague);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

