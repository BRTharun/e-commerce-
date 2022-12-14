const express = require("express");
const cookieParser = require("cookie-parser");

const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");
const errorMiddleware = require("./middleware/error");


const app = express();
app.use(express.json());
app.use(cookieParser());
//route imports


app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1",order);

//Middleware for errors
app.use(errorMiddleware);



module.exports = app;
