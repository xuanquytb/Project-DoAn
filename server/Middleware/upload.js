const express = require("express");

const multer = require("multer");

const { UpdateUserAvata } = require("../src/models/user");

const Router = express.Router();

const multerConfig = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./src/public/upload");
    },
    filename: (req, file, callback) => {
        const ext = file.mimetype.split("/")[1];
        callback(null, `image-${Date.now()}.${ext}`);
    },
});

const isImage = (req, file, callback) => {
    if (file.mimetype.startsWith("image")) {
        callback(null, true);
    } else {
        callback(new Error("Chỉ hình ảnh mới được chấp nhận"));
    }
};

const upload = multer({
    storage: multerConfig,
    fileFilter: isImage,
});

Router.post("/image/user/:id", upload.single("photo"), async (req, res) => {
    const result = await UpdateUserAvata(req.file.filename, req.params.id);
    if (result) {
        res.status(200).json({
            success: true,
            message: "Cập nhật thành công",
        });
    } else {
        res.status(200).json({
            success: false,
            message: "Cập nhật thất bại",
        });
    }
});

module.exports = Router;
