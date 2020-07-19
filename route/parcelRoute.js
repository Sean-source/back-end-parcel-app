const express = require("express");
const bodyParser = require("body-parser");
const { createParcel, getParcels } = require("../controller/parcelController")

const app = express();

app.use(bodyParser.json());

app.post("/", createParcel);
app.get("/", getParcels);

module.exports = app;