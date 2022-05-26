const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    role: {
        type: String,
    },
    address: {
        type: String,
    },
    education: {
        type: String,
    },
    phone: {
        type: String,
    },
    linkedin: {
        type: String,
    },
});
const User = mongoose.model("User", UserSchema);
module.exports = User;
