const express = require("express");
const app = express();
const orderModel = require("../Models/Order");

app.post("/api/create-order", async (req, res) => {
    const order = new orderModel(req.body);
    console.log(order);
    try {
        await order.save();
        res.send(order);
    } catch (error) {
        res.status(500).send(error);
    }
});
module.exports = app;
