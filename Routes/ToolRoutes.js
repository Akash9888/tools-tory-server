const express = require("express");
const app = express();
const toolModel = require("../Models/Tool");

// create tool api

app.post("/api/create-tool", async (req, res) => {
    const tool = new toolModel(req.body);
    console.log(tool);
    try {
        await tool.save();
        res.send(tool);
    } catch (error) {
        res.status(500).send(error);
    }
});
module.exports = app;
