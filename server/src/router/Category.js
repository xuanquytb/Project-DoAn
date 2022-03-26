const express = require("express");

const SchemaCategory = require("../models/category");

const Router = express.Router();

const VerifyToken = require("../../Middleware/Auth");

Router.post("/", VerifyToken, async (req, res) => {
  const { name, image, description, status } = req.body;

  if (!name || !image || !description || !status) {
    res
      .status(400)
      .json({ success: false, message: "Vui lòng nhập đầy đủ thông tin" });
  } else {
    try {
      const Category = SchemaCategory.findOne({ name });

      if (Category) {
        const newCategory = new SchemaCategory({
          name,
          image,
          description,
          status,
        });

        await newCategory.save();
        res
          .status(200)
          .json({ success: true, message: "Thêm Category thành công" });
      } else {
        res
          .status(200)
          .json({ success: false, message: "Category đã tồn tại" });
      }
    } catch (error) {
      res
        .status(400)
        .json({ success: false, message: `Xảy ra lỗi cơ sở dữ liệu ${error}` });
    }
  }
});

module.exports = Router;
