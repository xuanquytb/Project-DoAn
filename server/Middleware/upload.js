const express = require("express");

const multer = require("multer");

const Router = express.Router();

const multerConfig = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "public/upload");
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
        callback(new Error("Only Image is Allowed"));
    }
};

const upload = multer({
    storage: multerConfig,
    fileFilter: isImage,
});

Router.post("/image", upload.single("photo"), (req, res) => {
    console.log(req.file);
    res.status(200).json({
        success: true,
        message: "Upload thành công",
    });
});

module.exports = Router;
