const express = require("express");

const Router = express.Router();

const jwt = require("jsonwebtoken");

const argon2 = require("argon2");

const {
    Employee,
    find_all_Employee,
    InsertEmpoyee,
    find_Emp_by_name_row,
    find_Emp_by_username,
    delete_Emp_By_Id,
    UpdateEmployee,
} = require("../models/Employee");

const { find_by_id_role, find_by_name_row_role } = require("../models/role");

const verifyToken = require("../../Middleware/Auth");

const GenerateToken = (payload) => {
    const token = jwt.sign(payload, process.env.secret_token, {
        expiresIn: "1d",
    });
    return token;
};

Router.get("/", verifyToken, async (req, res) => {
    try {
        const users = await find_all_Employee();
        if (!users) {
            return res
                .status(202)
                .json({ success: false, message: "User not found" });
        } else {
            return res
                .status(200)
                .json({ success: true, users, role: req.role });
        }
    } catch (error) {
        return res
            .status(500)
            .json({ success: false, message: "Server Error" });
    }
});

Router.post("/create", verifyToken, async (req, res) => {
    if (req.role.id === 1 || req.role.id === 2) {
        const {
            fullname,
            sex,
            email,
            phone,
            address,
            username,
            password,
            statusLock,
            dateOfBirth,
            nameRole,
        } = req.body;

        if (
            !fullname ||
            !sex ||
            !email ||
            !phone ||
            !address ||
            !username ||
            !password ||
            !statusLock ||
            !dateOfBirth ||
            !nameRole
        ) {
            res.status(400).json({
                success: true,
                message: "Nhập thiếu thông tin",
            });
        } else {
            const user = await find_Emp_by_name_row("username", username);
            if (user.length > 0) {
                res.status(400).json({
                    success: false,
                    message: "Tài khoản đã tồn tại",
                });
            } else {
                const emailValid = await find_Emp_by_name_row("email", email);
                if (emailValid.length > 0) {
                    res.status(400).json({
                        success: false,
                        message: "Email đã tồn tại",
                    });
                } else {
                    const phoneValid = await find_Emp_by_name_row(
                        "phone",
                        phone
                    );
                    if (phoneValid.length > 0) {
                        res.status(400).json({
                            success: false,
                            message: "Số điện thoại đã tồn tại",
                        });
                    } else {
                        const hashPassword = await argon2.hash(password);
                        const role = await find_by_name_row_role(
                            "nameRole",
                            nameRole
                        );
                        const newUser = new Employee({
                            fullname,
                            sex,
                            email,
                            phone,
                            address,
                            username,
                            password: hashPassword,
                            statusLock: 0,
                            dateOfBirth,
                            idRole: role.id,
                        });
                        try {
                            const result = await InsertEmpoyee(newUser);
                            if (result) {
                                const token = GenerateToken({
                                    userId: result.id,
                                    role: role,
                                });
                                const userNew = await find_Emp_by_name_row(
                                    "id",
                                    result.id
                                );
                                res.status(200).json({
                                    success: true,
                                    tokenAccess: token,
                                    message: "Thêm thành công",
                                    user: userNew,
                                });
                            } else {
                                res.status(400).json({
                                    success: false,
                                    message: "Thêm thất bại",
                                });
                            }
                        } catch (error) {
                            res.status(400).json({
                                success: false,
                                message: "Xảy ra lỗi : " + error,
                            });
                        }
                    }
                }
            }
        }
    } else {
        return res.status(405).json({
            success: false,
            message: "Tài khoản không được cấp phép",
        });
    }
});

Router.put("/update/:id", verifyToken, async (req, res) => {
    const { fullname, sex, dateOfBirth, email, phone, address } = req.body;
    if (!fullname || !sex || !dateOfBirth || !email || !phone || !address) {
        res.status(400).json({
            success: true,
            message: "Nhập thiếu thông tin",
        });
    } else {
        const user = await find_Emp_by_name_row("id", req.params.id);
        if (user.length <= 0) {
            res.status(400).json({
                success: false,
                message: "Tài khoản không tồn tại",
            });
        } else {
            const newUpdate = new Employee({
                fullname,
                email,
                phone,
                address,
                sex,
                dateOfBirth,
            });
            try {
                const result = await UpdateEmployee(newUpdate, req.params.id);
                const employee = await find_all_Employee();
                if (result) {
                    res.status(200).json({
                        success: true,
                        message: "Cập nhật thành công",
                        employees: employee,
                    });
                } else {
                    res.status(400).json({
                        success: false,
                        message: "Cập nhật thất bại",
                    });
                }
            } catch (error) {
                res.status(400).json({
                    success: false,
                    message: "Xảy ra lỗi : " + error,
                });
            }
        }
    }
});

Router.delete("/:id", verifyToken, async (req, res) => {
    try {
        if (req.role.nameRole === "Administrators") {
            const result = await delete_Emp_By_Id(req.params.id);
            if (result != 1) {
                return res
                    .status(202)
                    .json({ success: false, message: "Xóa thất bại" });
            } else {
                return res
                    .status(200)
                    .json({ success: true, message: "Xóa thành công" });
            }
        } else {
            return res.status(405).json({
                success: false,
                message: "Tài khoản không được cấp phép",
            });
        }
    } catch (error) {
        return res
            .status(500)
            .json({ success: false, message: "Server Error" });
    }
});

Router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        res.status(500).json({
            success: false,
            message: "Nhập thiếu thông tin Tài khoản/Mật khẩu",
        });
    } else {
        const user = await find_Emp_by_username(username);

        if (!user) {
            res.status(500).json({
                success: false,
                message: "Tài khoản/Mật khẩu không chính xác",
            });
        } else {
            const nameRole = await find_by_id_role(user.idRole);
            console.log(nameRole);
            const validPassword = await argon2.verify(
                user.passwordEn,
                password
            );
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
                res.status(200).json({
                    success: false,
                    message: "Tài khoản/Mật khẩu không chính xác",
                });
            }
        }
    }
});

module.exports = Router;
