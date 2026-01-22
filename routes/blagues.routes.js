const express = require("express");
const router = express.Router();
const Blague = require("../models/blague.model");

/**
 * POST - Ajouter une blague
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
 * GET - Toutes les blagues
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
 * GET - Blague par ID
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
 * GET - Blague aléatoire
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
