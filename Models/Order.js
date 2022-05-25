const mongoose = require("mongoose");
const OrderModel = new mongoose.Schema({
    productId: {
        type: String,
        required: true,
    },
    productName: {
        type: String,
        required: true,
    },
    date: {
        type: "date",
        default: Date.now(),
    },
    quantity: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});
const Order = mongoose.model("Order", OrderModel);
module.exports = Order;
