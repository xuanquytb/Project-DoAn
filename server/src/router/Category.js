const express = require("express");

const Router = express.Router();

const jwt = require("jsonwebtoken");

const argon2 = require("argon2");

const {
    find_all_Category,
    find_by_Id,
    find_by_name_row_category,
    delete_By_Id,
    // find_by_nameCategory,
    InsertCategory,
    UpdateCategory,
    Category,
} = require("../models/category");
const {
    find_Emp_by_name_row,
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
        const user = await find_by_name_row("id", req.userId);
        if (!user) {
            return res
                .status(202)
                .json({ success: false, message: "User not found" });
        } else {
            return res
                .status(200)
                .json({ success: true, user, role: req.role });
        }
    } catch (error) {
        return res
            .status(500)
            .json({ success: false, message: "Server Error" });
    }
});
Router.delete("/:id", verifyToken, async (req, res) => {
    const result = await find_Emp_by_name_row("id",req.userId)
    if(result){
        try {
            if (req.role.nameRole === "Administrators") {
                const result = await delete_By_Id(req.params.id);
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
    }else{
            return res.status(405).json({
                success: false,
                message: "Tài khoản không tồn tại",
            });
    }
    
});

Router.get("/allCategory", verifyToken, async (req, res) => {
    const result = await find_Emp_by_name_row("id",req.userId)
    if(result)  {
        try {
            const categorys = await find_all_Category();
            if (!categorys) {
                return res
                    .status(202)
                    .json({ success: false, message: "User not found" });
            } else {
                return res
                    .status(200)
                    .json({ success: true, categorys });
            }
        } catch (error) {
            return res
                .status(500)
                .json({ success: false, message: "Server Error" });
        }
    } else{
        return res.status(405).json({
            success: false,
            message: "Tài khoản không tồn tại",
        });
}
});

Router.post("/addCategory", verifyToken, async (req, res) => {
    if (req.role.id === 1 || req.role.id === 3) {
        const {
            nameCategory,
            image,
            description,
        } = req.body;

        if (
            !nameCategory ||
            !image ||
            !description 
        ) {
            res.status(400).json({
                success: true,
                message: "Nhập thiếu thông tin",
            });
        } else {
            const nameCategoryRe = await find_by_name_row_category("nameCategory", nameCategory);
            if (nameCategoryRe.length > 0) {
                res.status(400).json({
                    success: false,
                    message: "Ngành hàng đã tồn tại",
                });
            } else {
                try {
                    const newCategoryItem = new Category({
                        nameCategory,
                        image,
                        description,
                    })
                    const newCategoryRe = await InsertCategory(newCategoryItem);
                    if(newCategoryRe){
                        res.status(200).json({
                            success:true,
                            message: "Thêm thành công",
                            nameCategory: nameCategory,
                        })
                    }else{
                        res.status(400).json({
                            success:false,
                            message:"Thêm thất bại",
                        });
                    }
                } catch (error) {
                    res.status(400).json({
                        success:false,
                        message: "Xảy ra lỗi : " + error,
                    })
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

Router.put("/updateCategory/:id", verifyToken, async (req, res) => {
    if (req.role.id === 1 || req.role.id === 3) {
        const {
            nameCategory,
            image,
            description,
        } = req.body;
        if (
            !nameCategory ||
            !image ||
            !description 
        ) {
            res.status(400).json({
                success: true,
                message: "Nhập thiếu thông tin",
            });
        } else {
            const nameCategoryRe = await find_by_name_row_category("nameCategory", req.params.id);
            if (nameCategoryRe.length > 0) {
                res.status(400).json({
                    success: false,
                    message: "Ngành hàng đã tồn tại",
                });
            } else {
                try {
                    // console.log(req.params.id);
                    const newCategoryItem = new Category({
                        nameCategory,
                        image,
                        description,
                    })
                    const newCategoryRe = await UpdateCategory(newCategoryItem,req.params.id);
                    if(newCategoryRe){
                        res.status(200).json({
                            success:true,
                            message: "Cập nhật thành công",
                            nameCategory: nameCategory,
                        })
                    }else{
                        res.status(400).json({
                            success:false,
                            message:"Cập nhật thất bại",
                        });
                    }
                } catch (error) {
                    res.status(400).json({
                        success:false,
                        message: "Xảy ra lỗi : " + error,
                    })
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
//còn add card với update card
// Router.put("/update", async (req, res) => {
//         res.status(400).json({
//             success: true,
//             message: "Nhập thiếu thông tin",
//         });
//     } else {
//         const user = await find_by_name_row("username", username);
//         if (user.length <= 0) {
//             res.status(400).json({
//                 success: false,
//                 message: "Tài khoản không tồn tại",
//             });
//         } else {
//             const newUpdate = new Users({
//                 fullname,
//                 email,
//                 phone,
//                 address,
//                 sex,
//                 dateOfBirth,
//                 nameAvata,
//             });
//             try {
//                 const result = await UpdateUser(newUpdate, username);
//                 const users = await find_all_Customer();
//                 if (result) {
//                     res.status(200).json({
//                         success: true,
//                         message: "Cập nhật thành công",
//                         users: users,
//                     });
//                 } else {
//                     res.status(400).json({
//                         success: false,
//                         message: "Cập nhật thất bại",
//                     });
//                 }
//             } catch (error) {
//                 res.status(400).json({
//                     success: false,
//                     message: "Xảy ra lỗi : " + error,
//                 });
//             }
//         }
//     }
// });

// Router.post("/login", async (req, res) => {
//     const { username, password } = req.body;
//     if (!username || !password) {
//         res.status(500).json({
//             success: false,
//             message: "Nhập thiếu thông tin Tài khoản/Mật khẩu",
//         });
//     } else {
//         const user = await find_by_username(username);

//         if (!user) {
//             res.status(500).json({
//                 success: false,
//                 message: "Tài khoản/Mật khẩu không chính xác",
//             });
//         } else {
//             const nameRole = await find_by_id_role(user.idRole);
//             console.log(nameRole);
//             const validPassword = await argon2.verify(
//                 user.passwordEn,
//                 password
//             );
//             if (validPassword) {
//                 const accessToken = GenerateToken({
//                     userId: user.id,
//                     role: nameRole,
//                 });
//                 res.status(200).json({
//                     success: true,
//                     message: "Đăng nhập thành công",
//                     token: accessToken,
//                     user: user,
//                 });
//             } else {
//                 res.status(200).json({
//                     success: false,
//                     message: "Tài khoản/Mật khẩu không chính xác",
//                 });
//             }
//         }
//     }
// });

module.exports = Router;
