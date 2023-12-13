const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
  },
  {collection : "Item"}
);

module.exports = mongoose.model("Item", itemSchema);