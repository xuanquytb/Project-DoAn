require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const RouterRole = require("./router/role");
const RouterAuth = require("./router/auth");
const RouterCategory = require("./router/Category");
const RouterProduct = require("./router/Product");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/role", RouterRole);
app.use("/api/auth", RouterAuth);
app.use("/api/category", RouterCategory);
app.use("/api/product", RouterProduct);

app.listen(process.env.PORT, () =>
  console.log("Máy chủ đã chạy tại công 8080")
);
