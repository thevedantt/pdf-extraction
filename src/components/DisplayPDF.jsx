import React, { useEffect, useState } from "react";
import * as pdfjsLib from "pdfjs-dist/webpack";

const DisplayPDF = ({ file }) => {
  const [pdfText, setPdfText] = useState("");

  useEffect(() => {
    const processPDF = async () => {
      try {
        const reader = new FileReader();
        reader.onload = async (e) => {
          const typedArray = new Uint8Array(e.target.result);
          const pdf = await pdfjsLib.getDocument(typedArray).promise;

          let allText = "";

          for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
            const page = await pdf.getPage(pageNum);
            const textContent = await page.getTextContent();
            const pageText = textContent.items.map((item) => item.str).join(" ");
            allText += `Page ${pageNum}:\n${pageText}\n\n`; // Organize text by pages
          }

          setPdfText(allText);
          console.log("Extracted text:", allText);
        };
        reader.readAsArrayBuffer(file);
      } catch (error) {
        console.error("Error processing PDF:", error);
      }
    };

    if (file) {
      processPDF();
    }
  }, [file]);

  return (
    <div className="pdf-display-container">
      <h3>Extracted PDF Text:</h3>
      <div className="pdf-text-content">
        {pdfText || "Processing PDF... Please wait."}
      </div>
    </div>
  );
};

export default DisplayPDF;
