const { processFile, protectPDF } = require("../services/fileService");

const uploadFile = async (req, res) => {
  try {
    const result = await processFile(req.file);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const downloadPDF = async (req, res) => {
  try {
    const protectedPDFPath = await protectPDF(
      req.body.pdfPath,
      req.body.password
    );
    res.download(protectedPDFPath);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { uploadFile, downloadPDF };
