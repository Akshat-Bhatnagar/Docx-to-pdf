const { convertToPDF, addPasswordProtection } = require("../utils/pdfUtils");

const processFile = async (file) => {
  if (!file) {
    throw new Error("No file uploaded");
  }

  const metadata = {
    name: file.originalname,
    size: file.size,
    type: file.mimetype,
  };

  const pdfPath = await convertToPDF(file.path);
  return { metadata, pdfPath };
};

const protectPDF = async (pdfPath, password) => {
  if (!pdfPath) {
    throw new Error("No PDF path provided");
  }

  const protectedPDFPath = await addPasswordProtection(pdfPath, password);
  return protectedPDFPath;
};

module.exports = { processFile, protectPDF };
