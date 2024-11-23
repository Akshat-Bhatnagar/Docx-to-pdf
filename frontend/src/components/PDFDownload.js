import React, { useState } from "react";
import axios from "axios";

const PDFDownload = ({ pdfPath }) => {
  const [password, setPassword] = useState("");

  const handleDownload = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/files/download",
        { pdfPath, password },
        { responseType: "blob" }
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "protected.pdf");
      document.body.appendChild(link);
      link.click();
    } catch (err) {
      console.error("Error downloading PDF:", err);
    }
  };

  return (
    <div>
      <h3>Download PDF</h3>
      <input
        type="password"
        placeholder="Enter password (optional)"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleDownload}>Download Protected PDF</button>
    </div>
  );
};

export default PDFDownload;
