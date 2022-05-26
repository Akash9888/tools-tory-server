const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./Routes/UserRoutes");
const toolRouter = require("./Routes/ToolRoutes");
const orderRouter = require("./Routes/OrderRoutes");
const paymentRouter = require("./Routes/PaymentRoutes");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.port || 5000;

mongoose.connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.33mjx.mongodb.net/tools-toy?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use(userRouter);
app.use(toolRouter);
app.use(orderRouter);
app.use(paymentRouter);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
