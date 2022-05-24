const express = require("express");
const userModel = require("../Models/User");
const app = express();

app.post("/api/create-user", async (req, res) => {
    const user = new userModel(req.body);
    console.log(user);
    try {
        await user.save();
        res.send(user);
    } catch (error) {
        res.status(500).send(error);
    }
});
module.exports = app;
