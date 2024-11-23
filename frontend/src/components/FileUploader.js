import React, { useState } from "react";
import axios from "axios";
import FileMetadata from "./FileMetadata";
import PDFDownload from "./PDFDownload";

const FileUploader = () => {
  const [file, setFile] = useState(null);
  const [metadata, setMetadata] = useState(null);
  const [pdfPath, setPdfPath] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:5000/files/upload",
        formData
      );
      setMetadata(response.data.metadata);
      setPdfPath(response.data.pdfPath);
    } catch (err) {
      console.error("Error uploading file:", err);
    }
  };

  return (
    <div>
      <h2>DOCX to PDF Converter</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>

      <FileMetadata metadata={metadata} />
      {pdfPath && <PDFDownload pdfPath={pdfPath} />}
    </div>
  );
};

export default FileUploader;
