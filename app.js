const express = require("express");
const cors = require("cors");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
const blaguesRoutes = require("./routes/blagues.routes");
app.use("/api/v1/blagues", blaguesRoutes);

module.exports = app;
