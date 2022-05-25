const express = require("express");
const app = express();
const toolModel = require("../Models/Tool");
const ObjectId = require("mongodb").ObjectId;
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

app.get("/api/fetch-tools", async (req, res) => {
    const tools = await toolModel.find({});

    try {
        res.send(tools);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get("/api/fetch-single-tool/:_id", async (req, res) => {
    console.log(req.params._id);
    const query = { _id: ObjectId(req.params._id) };

    const tool = await toolModel.find(query);

    try {
        res.send(tool);
    } catch (e) {
        res.status(500).send(e);
    }
});

module.exports = app;
