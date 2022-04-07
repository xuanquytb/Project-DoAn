require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const RouterRole = require("./router/role");
const RouterAuth = require("./router/auth");
const RouterCategory = require("./router/Category");
const RouterProduct = require("./router/Product");

const ConnectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://admin:admin@project-app.87hfe.mongodb.net/project-app?retryWrites=true&w=majority`
    );
    console.log("Kết nối thành công");
  } catch (error) {
    console.log("Kết nối thất bại");
    process.exit(1);
  }
};

ConnectDB();

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
