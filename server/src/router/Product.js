const express = require("express");

const Router = express.Router();

const jwt = require("jsonwebtoken");

const argon2 = require("argon2");

const {
    find_by_name_row_product,
    find_all_Product,
    find_by_Id,
    delete_By_Id,
    InsertProduct,
    UpdateProduct,
    Product,
} = require("../models/product");
const { find_Emp_by_name_row } = require("../models/Employee");

const verifyToken = require("../../Middleware/Auth");

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
    const result = await find_Emp_by_name_row("id", req.userId);
    if (result) {
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
    } else {
        return res.status(405).json({
            success: false,
            message: "Tài khoản không tồn tại",
        });
    }
});

Router.get("/allProduct", verifyToken, async (req, res) => {
    const result = await find_Emp_by_name_row("id", req.userId);
    if (result) {
        try {
            const products = await find_all_Product();
            if (!products) {
                return res
                    .status(202)
                    .json({ success: false, message: "User not found" });
            } else {
                return res.status(200).json({ success: true, products });
            }
        } catch (error) {
            return res
                .status(500)
                .json({ success: false, message: "Server Error" });
        }
    } else {
        return res.status(405).json({
            success: false,
            message: "Tài khoản không tồn tại",
        });
    }
});

Router.post("/addProduct", verifyToken, async (req, res) => {
    if (req.role.id === 1 || req.role.id === 3) {
        const {
            price,
            nameProduct,
            description,
            warranty,
            quantity,
            promotional,
            status,
            image,
            idCategory,
            idUnit,
            idManufacturer,
            idOrigin,
        } = req.body;

        if (
            (!price,
            !nameProduct ||
                !description ||
                !warranty ||
                !quantity ||
                !promotional ||
                !status ||
                !image ||
                !idCategory ||
                !idUnit ||
                !idManufacturer ||
                !idOrigin)
        ) {
            res.status(400).json({
                success: true,
                message: "Nhập thiếu thông tin",
            });
        } else {
            const nameProductRe = await find_by_name_row_product(
                "nameProduct",
                nameProduct
            );
            if (nameProductRe.length > 0) {
                res.status(400).json({
                    success: false,
                    message: "Sản phẩm đã tồn tại",
                });
            } else {
                try {
                    const newProductItem = new Product({
                        price,
                        nameProduct,
                        description,
                        warranty,
                        quantity,
                        promotional,
                        status,
                        image,
                        idCategory,
                        idUnit,
                        idManufacturer,
                        idOrigin,
                    });
                    const newProductRe = await InsertProduct(newProductItem);
                    if (newProductRe) {
                        res.status(200).json({
                            success: true,
                            message: "Thêm thành công",
                            nameProduct: nameProduct,
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
    } else {
        return res.status(405).json({
            success: false,
            message: "Tài khoản không được cấp phép",
        });
    }
});

Router.put("/updateProduct/:id", verifyToken, async (req, res) => {
    if (req.role.id === 1 || req.role.id === 3) {
        const {
            nameProduct,
            description,
            warranty,
            quantity,
            promotional,
            status,
            image,
            idCategory,
            idUnit,
            idManufacturer,
            idOrigin,
        } = req.body;
        if (
            !nameProduct ||
            !description ||
            !warranty ||
            !quantity ||
            !promotional ||
            !status ||
            !image ||
            !idCategory ||
            !idUnit ||
            !idManufacturer ||
            !idOrigin
        ) {
            res.status(400).json({
                success: true,
                message: "Nhập thiếu thông tin",
            });
        } else {
            const nameProductRe = await find_by_name_row_product(
                "nameProduct",
                nameProduct
            );
            if (nameProductRe.length > 0) {
                res.status(400).json({
                    success: false,
                    message: "Tên Sản phẩm đã được sử dụng",
                });
            } else {
                try {
                    const newProductItem = new Product({
                        nameProduct,
                        image,
                        description,
                    });
                    const newProductRe = await UpdateProduct(
                        newProductItem,
                        req.params.id
                    );
                    if (newProductRe) {
                        res.status(200).json({
                            success: true,
                            message: "Cập nhật thành công",
                            nameProduct: nameProduct,
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
    } else {
        return res.status(405).json({
            success: false,
            message: "Tài khoản không được cấp phép",
        });
    }
});

module.exports = Router;
