const mongoose = require("mongoose");
require("dotenv").config();
const mongoUrl = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.33mjx.mongodb.net/tools-toy?retryWrites=true&w=majority`;

const connectToMongo = async () => {
    try {
        mongoose.connect(
            mongoUrl,
            { useNewUrlParser: true, useUnifiedTopology: true },
            () => console.log("connected")
        );
    } catch (error) {
        console.log("could not connect");
    }
};
module.exports = connectToMongo;
