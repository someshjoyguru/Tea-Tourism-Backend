const express = require("express");
const router = express.Router();
const Data = require("../models/Data");

router.post("/", async (req, res) => {
  try {
    const { temperature, humidity } = req.body;
    const newData = new Data({ temperature, humidity });
    const savedData = await newData.save();
    res.json(savedData);
  } catch (err) {
    res.status(500).json({ error: "Failed to save data" });
  }
});

router.get("/", async (req, res) => {
  try {
    const { start_date, end_date } = req.query;
    const query = {};

    if (start_date) query.timestamp = { $gte: new Date(start_date) };
    if (end_date) query.timestamp = { ...query.timestamp, $lte: new Date(end_date) };

    const data = await Data.find(query).sort({ timestamp: 1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve data" });
  }
});

module.exports = router;
