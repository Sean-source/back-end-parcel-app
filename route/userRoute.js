const express = require("express");
const bodyParser = require("body-parser");
const { createUser, getUsers, login } = require("../controller/userController")

const app = express();

app.use(bodyParser.json());

app.post("/register", createUser)
app.get("/", getUsers)
app.post("/login", login)

module.exports = app;