const express = require("express");
const app = express();
const cors = require('cors');

require("dotenv").config({path:"config/config.env"})

// Using Middlewares
app.use(cors())
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));


// importing Routes
const form = require("./routes/form.js")

// usign Routes
app.use("/api/v1",form)

module.exports = app;