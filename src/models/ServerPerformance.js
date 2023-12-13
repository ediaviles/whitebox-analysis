const mongoose = require("mongoose");

const serverPerformanceSchema = new mongoose.Schema({
  serverId: Number,
  performance: Array,
  },
  {collection : "serverPerformance"}
);

module.exports = mongoose.model("serverPerformance", serverPerformanceSchema);