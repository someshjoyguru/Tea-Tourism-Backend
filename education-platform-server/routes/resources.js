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

// GET /resources/:id - Get a specific resource by ID
router.get("/:id", async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id).populate("category");
    if (!resource) {
      return res.status(404).json({ error: "Resource not found" });
    }
    res.json(resource);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch resource" });
  }
});

// PUT /resources/:id - Update a specific resource by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedResource = await Resource.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate("category");
    if (!updatedResource) {
      return res.status(404).json({ error: "Resource not found" });
    }
    res.json(updatedResource);
  } catch (err) {
    res.status(400).json({ error: "Failed to update resource" });
  }
});

// DELETE /resources/:id - Delete a specific resource by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedResource = await Resource.findByIdAndDelete(req.params.id);
    if (!deletedResource) {
      return res.status(404).json({ error: "Resource not found" });
    }
    res.json({ message: "Resource deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete resource" });
  }
});

module.exports = router;
