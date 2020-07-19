const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoute = require("./route/userRoute")
const parcelsRoute = require("./route/parcelRoute")
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(success => console.log("connected to database successfully"))
.catch(err => console.log("error connecting to database"));

app.get("/", (req, res) => {
    res.send("this is home")
})

app.use("/user", userRoute)
app.use("/parcels", parcelsRoute)

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`app is running on port ${PORT}`))