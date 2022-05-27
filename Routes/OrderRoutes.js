const express = require("express");
const app = express();
const orderModel = require("../Models/Order");
const ObjectId = require("mongodb").ObjectId;
const verifyJwt = require("../Middleware/VerifyJwt");
app.post("/create-order", verifyJwt, async (req, res) => {
    const order = new orderModel(req.body);

    try {
        await order.save();
        res.send(order);
    } catch (error) {
        res.status(500).send(error);
    }
});
app.get("/fetch-orders/:email", verifyJwt, async (req, res) => {
    const query = { email: req.params.email };

    const order = await orderModel
        .find(query)
        .select([
            "productId",
            "productName",
            "quantity",
            "totalPrice",
            "status",
            "transaction",
        ]);

    try {
        res.send(order);
    } catch (e) {
        res.status(500).send(e);
    }
});
app.get("/fetch-orders-manage", verifyJwt, async (req, res) => {
    const order = await orderModel
        .find()
        .select(["productId", "productName", "email", "status"]);

    try {
        res.send(order);
    } catch (e) {
        res.status(500).send(e);
    }
});
app.get("/fetch-single-order/:_id", verifyJwt, async (req, res) => {
    const query = { _id: ObjectId(req.params._id) };

    const order = await orderModel.find(query);
    try {
        res.send(order);
    } catch (e) {
        res.status(500).send(e);
    }
});
app.put("/update-single-order/:_id", verifyJwt, async (req, res) => {
    const query = { _id: ObjectId(req.params._id) };
    console.log(query);
    console.log(req.body);
    orderModel.findOneAndUpdate(
        query,
        req.body,
        { upsert: true },
        function (err, doc) {
            if (err) return res.send(500, { error: err });
            return res.send("Succesfully saved.");
        }
    );
});

app.delete("/delete-order/:_id", verifyJwt, async (req, res) => {
    const query = { _id: ObjectId(req.params._id) };
    try {
        const order = await orderModel.findByIdAndDelete(query);
        console.log(order);

        if (!order) res.status(404).send("No item found");
        res.status(200).send();
    } catch (error) {
        res.status(500).send(error);
    }
});
module.exports = app;
