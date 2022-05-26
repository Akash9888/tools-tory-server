const mongoose = require("mongoose");
const ReviewSchema = new mongoose.Schema({
    name: {
        type: String,
        default: "A User",
    },
    photo: {
        type: String,
        default: "https://source.unsplash.com/100x100/?portrait",
    },
    ratings: {
        type: Number,
        required: true,
    },
    review: {
        type: String,
        required: true,
    },
});
const Review = mongoose.model("Review", ReviewSchema);
module.exports = Review;
