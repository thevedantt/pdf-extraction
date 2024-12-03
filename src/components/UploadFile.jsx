import React, { useState } from "react";
import DisplayPDF from "./DisplayPDF";
import "../styles/UploadFile.css";

const UploadFile = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      console.log("File selected:", selectedFile.name);
    } else {
      console.log("No file selected");
    }
  };

  return (
    <div className="upload-container">
      <h2>Upload Your PDF</h2>
      <input
        type="file"
        accept=".pdf"
        onChange={handleFileChange}
        className="file-input"
      />
      {file && (
        <div>
          <p className="file-name">Selected File: {file.name}</p>
          <DisplayPDF file={file} />
        </div>
      )}
    </div>
  );
};

export default UploadFile;
