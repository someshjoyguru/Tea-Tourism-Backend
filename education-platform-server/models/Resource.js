// models/Resource.js
const mongoose = require("mongoose");

const ResourceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, enum: ["video", "document", "link"], required: true },
  url: { type: String, required: true },
  description: String,
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  level: { type: String, enum: ["basic", "intermediate", "advanced"], required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Resource", ResourceSchema);
