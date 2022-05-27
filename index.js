const express = require("express");
const connectToMongo = require("./db");
const cors = require("cors");
// const userRouter = require("./Routes/UserRoutes");
// const toolRouter = require("./Routes/ToolRoutes");
// const orderRouter = require("./Routes/OrderRoutes");
// const paymentRouter = require("./Routes/PaymentRoutes");
// const reviewRouter = require("./Routes/ReviewRoutes");

require("dotenv").config();
const app = express();
app.use(express.json());

const port = process.env.PORT || 5000;
app.use(cors());
connectToMongo();

app.get("/", (req, res) => {
    res.send("Tools-Tory!");
});
app.use("/api/user", require("./Routes/UserRoutes"));
app.use("/api/tool", require("./Routes/ToolRoutes"));
app.use("/api/order", require("./Routes/OrderRoutes"));
app.use("/api/payment", require("./Routes/PaymentRoutes"));
app.use("/api/review", require("./Routes/ReviewRoutes"));

// app.use(userRouter);
// app.use(toolRouter);
// app.use(orderRouter);
// app.use(paymentRouter);
// app.use(reviewRouter);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
