const fs = require("fs");
const path = require("path");
const { PDFDocument } = require("pdf-lib");
const { toPdf } = require("docx-to-pdf");

const convertToPDF = async (docxPath) => {
  const pdfPath = path.join(__dirname, "../../uploads", `${Date.now()}.pdf`);

  try {
    const pdfBuffer = await toPdf(fs.readFileSync(docxPath));
    fs.writeFileSync(pdfPath, pdfBuffer);
    return pdfPath;
  } catch (err) {
    throw new Error("Error converting DOCX to PDF");
  }
};

const addPasswordProtection = async (pdfPath, password) => {
  const pdfBytes = fs.readFileSync(pdfPath);
  const pdfDoc = await PDFDocument.load(pdfBytes);

  pdfDoc.encrypt({ ownerPassword: password, userPassword: password });

  const protectedPDFPath = pdfPath.replace(".pdf", "_protected.pdf");
  const protectedPDFBytes = await pdfDoc.save();
  fs.writeFileSync(protectedPDFPath, protectedPDFBytes);

  return protectedPDFPath;
};

module.exports = { convertToPDF, addPasswordProtection };
