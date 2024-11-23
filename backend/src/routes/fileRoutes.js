const express = require("express");
const multer = require("multer");
const { uploadFile, downloadPDF } = require("../controllers/fileController");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/upload", upload.single("file"), uploadFile);
router.post("/download", downloadPDF);

module.exports = router;
