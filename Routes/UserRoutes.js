const express = require("express");
const userModel = require("../Models/User");
const app = express();
app.use(express.json());
// create user api
app.post("/api/create-user", async (req, res) => {
    const user = new userModel(req.body);
    console.log(user);
    try {
        await user.save();
        res.send(user);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.put("/api/make-admin/:email", async (req, res) => {
    const query = { email: req.params.email };
    console.log(query);
    console.log(req.body);
    const user = await userModel.find(query).select(["role"]);

    if (user[0]?.role == "admin") {
        return res.send("Allready Admin.");
    } else {
        userModel.findOneAndUpdate(
            query,
            req.body,
            { upsert: true },
            function (err, doc) {
                if (err) return res.send(500, { error: err });
                return res.send("Succesfully saved.");
            }
        );
    }
});
module.exports = app;
