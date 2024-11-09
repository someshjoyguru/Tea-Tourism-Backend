// models/User.js
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  viewedResources: [{ type: mongoose.Schema.Types.ObjectId, ref: "Resource" }],
});

module.exports = mongoose.model("User", UserSchema);
