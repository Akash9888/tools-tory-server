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

    quantity: {
        type: Number,
        required: true,
    },
    totalPrice: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    transaction: {
        type: String,
        required: true,
    },
    unitPrice: {
        type: Number,
        required: true,
    },
    photo: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    date: {
        type: "date",
        default: Date.now(),
    },
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
});
const Order = mongoose.model("Order", OrderModel);
module.exports = Order;
