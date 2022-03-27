const express = require("express");

const SchemaProduct = require("../models/product");

const Router = express.Router();

const VerifyToken = require("../../Middleware/Auth");

Router.post("/", VerifyToken, async (req, res) => {
  const { name,idCategory,description,image,hide,quantity,price,status } = req.body;

  if (!name || !idCategory  || !description || !image || !hide || !quantity || !price || !status ) {
    res
      .status(400)
      .json({ success: false, message: "Vui lòng nhập đầy đủ thông tin" });
  } else {
    try {
      const Product = SchemaProduct.findOne({ name });

      if (Product) {
        const newProduct = new SchemaProduct({
          name,
          idCategory,
          description,
          image,
          hide,
          quantity,
          price,
          status,
        });

        await newProduct.save();
        res
          .status(200)
          .json({ success: true, message: "Thêm Product thành công" });
      } else {
        res
          .status(200)
          .json({ success: false, message: "Product đã tồn tại" });
      }
    } catch (error) {
      res
        .status(400)
        .json({ success: false, message: `Xảy ra lỗi cơ sở dữ liệu ${error}` });
    }
  }
});

module.exports = Router;
