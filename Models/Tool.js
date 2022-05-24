const mongoose = require("mongoose");
const ToolSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    min: {
        type: Number,
        required: true,
    },
    price: { type: Number, required: true },
});
const Tool = mongoose.model("Tool", ToolSchema);
module.exports = Tool;
