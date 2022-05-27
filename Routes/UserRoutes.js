const express = require("express");
const userModel = require("../Models/User");
const app = express();
const jwt = require("jsonwebtoken");
const verifyJwt = require("../Middleware/VerifyJwt");
app.use(express.json());
// create user api
app.post("/api/create-user", async (req, res) => {
    const user = new userModel(req.body);
    console.log(user);
    console.log(req.body);
    try {
        await user.save();
        res.send(user);
    } catch (error) {
        res.status(500).send(error);
    }
});
app.post("/api/create-token", async (req, res) => {
    console.log(req.body);

    const accessToken = jwt.sign(req.body, process.env.JWT_SECRET, {
        expiresIn: "1d",
    });
    try {
        res.send(accessToken);
    } catch (e) {
        res.status(500).send(e);
    }
});

app.get("/api/fetch-user/:email", verifyJwt, async (req, res) => {
    const query = { email: req.params.email };

    const user = await userModel.find(query);
    console.log(user);

    try {
        res.send(user);
    } catch (e) {
        res.status(500).send(e);
    }
});
app.get("/api/fetch-admin/:email", verifyJwt, async (req, res) => {
    const query = { email: req.params.email };

    const user = await userModel.find(query).select(["role"]);
    console.log(user);

    try {
        res.send(user);
    } catch (e) {
        res.status(500).send(e);
    }
});

app.put("/api/make-admin/:email", verifyJwt, async (req, res) => {
    const query = { email: req.params.email };

    const user = await userModel.find(query).select(["role"]);
    try {
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
    } catch (error) {
        res.status(500).send(error);
    }
});
app.put("/api/update-user/:email", verifyJwt, async (req, res) => {
    const query = { email: req.params.email };
    console.log(req.body);
    userModel.findOneAndUpdate(
        query,
        req.body,
        { upsert: true },
        function (err, doc) {
            if (err) return res.send(500, { error: err });
            return res.send("Succesfully saved.");
        }
    );
});
module.exports = app;
