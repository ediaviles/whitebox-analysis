const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors')

app.use(cors());
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/local");
console.log(mongoose.connection.readyState)

const ServerPerformance = require("./models/ServerPerformance");

app.get("/api/serverPerformance", async (req, res) => {
  try {
    const serverPerformances = await ServerPerformance.find();
    res.json(serverPerformances);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
})