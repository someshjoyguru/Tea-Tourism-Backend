// routes/categories.js
const express = require("express");
const router = express.Router();
const Category = require("../models/Category");

// POST /categories - Create a new category
router.post("/", async (req, res) => {
  try {
    const category = new Category(req.body);
    const savedCategory = await category.save();
    res.json(savedCategory);
  } catch (err) {
    res.status(400).json({ error: "Failed to create category" });
  }
});

// GET /categories - Get all categories
router.get("/", async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch categories" });
  }
});

module.exports = router;
