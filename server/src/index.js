require("dotenv").config();
const express = require("express");
const cors = require("cors");
const RouterRole = require("./router/role");
const RouterAuth = require("./router/auth");
const RouterAuthAdmin = require("./router/authAdmin");
const RouterCard = require("./router/card");
const RouterCategory = require("./router/category");
const RouterUnit = require("./router/unit");
const RouterOrigin = require("./router/origin");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/role", RouterRole);
app.use("/api/auth", RouterAuth);
app.use("/api/admin", RouterAuthAdmin);
app.use("/api/category", RouterCategory);
app.use("/api/unit", RouterUnit);
app.use("/api/origin", RouterOrigin);
//localhost:8080/api/card/allCard
http: app.use("/api/card", RouterCard); //tạo chuỗi api

app.listen(process.env.PORT, () =>
    console.log("Máy chủ đã chạy tại công 8080")
);
