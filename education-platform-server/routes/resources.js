// routes/resources.js
const express = require("express");
const router = express.Router();
const Resource = require("../models/Resource");

// POST /resources - Create a new resource
router.post("/", async (req, res) => {
  try {
    const resource = new Resource(req.body);
    const savedResource = await resource.save();
    res.json(savedResource);
  } catch (err) {
    res.status(400).json({ error: "Failed to create resource" });
  }
});

// GET /resources - Get resources by category and level
router.get("/", async (req, res) => {
  try {
    const { category, level } = req.query;
    const filter = {};
    if (category) filter.category = category;
    if (level) filter.level = level;

    const resources = await Resource.find(filter).populate("category");
    res.json(resources);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch resources" });
  }
});

module.exports = router;
