require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const { test, addUserData } = require("./controllers/user.controller.js");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get("/",test);
app.post("/api/addReferralDetails",addUserData);

app.listen(3000, () => {
    console.log("Server is started...");
})