const express = require("express");

const SchemaRole = require("../models/role");

const Router = express.Router();

const VerifyToken = require("../../Middleware/Auth");

Router.post("/", VerifyToken, async (req, res) => {
  const { nameRole, description } = req.body;

  if (!nameRole || !description) {
    res
      .status(400)
      .json({ success: false, message: "Vui lòng nhập đầy đủ thông tin" });
  } else {
    try {
      const Role = SchemaRole.findOne({ nameRole, description });

      if (Role) {
        const newRole = new SchemaRole({
          nameRole,
          description,
        });

        await newRole.save();
        res
          .status(200)
          .json({ success: true, message: "Thêm Role thành công" });
      } else {
        res.status(200).json({ success: false, message: "Quyền đã tồn tại" });
      }
    } catch (error) {
      res
        .status(400)
        .json({ success: false, message: `Xảy ra lỗi cơ sở dữ liệu ${error}` });
    }
  }
});

module.exports = Router;
