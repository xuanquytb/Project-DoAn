const express = require("express");

const Router = express.Router();

const jwt = require("jsonwebtoken");

const argon2 = require("argon2");

const {
  Users,
  find_all,
  find_by_Id,
  find_by_name_row,
  find_by_username,
  InsertUser,
} = require("../models/user");

const { find_by_id_role, find_by_name_role } = require("../models/role");

const verifyToken = require("../../Middleware/Auth");

const GenerateToken = (payload) => {
  const token = jwt.sign(payload, process.env.secret_token, {
    expiresIn: "1d",
  });
  return token;
};

Router.get("/", verifyToken, async (req, res) => {
  try {
    const user = await find_by_name_row("id", req.userId);
    if (!user) {
      return res
        .status(202)
        .json({ success: false, message: "User not found" });
    } else {
      return res.status(200).json({ success: true, user, role: req.role });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: "Máy chủ gặp lỗi" });
  }
});

Router.get("/users", verifyToken, async (req, res) => {
  try {
    const users = await find_all();
    if (!users) {
      return res
        .status(202)
        .json({ success: false, message: "User not found" });
    } else {
      return res.status(200).json({ success: true, users, role: req.role });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: "Máy chủ gặp lỗi" });
  }
});

Router.post("/register", async (req, res) => {
  const { username, password, fullname, nameRole, email, phone, address } =
    req.body;

  if (
    !username ||
    !password ||
    !fullname ||
    !nameRole ||
    !email ||
    !phone ||
    !address
  ) {
    res.status(400).json({ success: true, message: "Nhập thiếu thông tin" });
  } else {
    const user = await find_by_name_row("username", username);
    if (user.length > 0) {
      res.status(400).json({ success: false, message: "Tài khoản đã tồn tại" });
    } else {
      const emailValid = await find_by_name_row("email", email);

      if (emailValid.length > 0) {
        res.status(400).json({ success: false, message: "Email đã tồn tại" });
      } else {
        const phoneValid = await find_by_name_row("phone", phone);
        if (phoneValid.length > 0) {
          res
            .status(400)
            .json({ success: false, message: "Số điện thoại đã tồn tại" });
        } else {
          const hashPassword = await argon2.hash(password);
          const role = await find_by_name_role(nameRole);
          const newUser = new Users({
            username,
            password: hashPassword,
            fullname,
            email,
            phone,
            address,
            idRole: role.id,
          });
          try {
            const result = await InsertUser(newUser);
            if (result) {
              const token = GenerateToken({ userId: result.id });
              res.status(200).json({
                success: true,
                tokenAccess: token,
                message: "Thêm thành công",
              });
            } else {
              res
                .status(400)
                .json({ success: false, message: "Thêm thất bại" });
            }
          } catch (error) {
            res
              .status(400)
              .json({ success: false, message: "Xảy ra lỗi : " + error });
          }
        }
      }
    }
  }
});

Router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).json({
      success: false,
      message: "Nhập thiếu thông tin Tài khoản/Mật khẩu",
    });
  } else {
    const user = await find_by_username(username);

    if (!user) {
      res
        .status(400)
        .json({ success: false, message: "Tâì khoản không tồn tại" });
    } else {
      const nameRole = await find_by_id_role(user.idRole);
      console.log(nameRole);
      const validPassword = await argon2.verify(user.passwordEn, password);
      if (validPassword) {
        const accessToken = GenerateToken({
          userId: user.id,
          role: nameRole,
        });
        res.status(200).json({
          success: true,
          message: "Đăng nhập thành công",
          token: accessToken,
          user: user,
        });
      } else {
        res.status(400).json({ success: true, message: "Đăng nhập thất bại" });
      }
    }
  }
});

module.exports = Router;
