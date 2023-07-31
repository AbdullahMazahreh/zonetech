const express = require("express");
const cors = require("cors");
const app = express();

// const productRouter = require("./routes/productsRoute");
const adminRouter = require("./routes/adminRoutes");
const userRoutes = require("./routes/userRoute");

app.use(cors({ origin: "*" }));
app.use(express.json());

// app.use("/api/v1/products", productRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/users", userRoutes);

module.exports = app;
