import React from "react";
import html2pdf from "html2pdf.js";
import { compile } from "@fileforge/react-print";
import { Button } from "@mui/material";

interface DownloadPdfProps {
  children: React.ReactNode;
  filename?: string;
}

const DownloadPDF: React.FC<DownloadPdfProps> = ({
  children,
  filename = "document.pdf",
}) => {
  const downloadPdf = async () => {
    // Compile the content passed as children into HTML
    const html = await compile(<>{children}</>);

    //     html2pdf()
    //       .from(html)
    //       .set({
    //         margin: 0,
    //         filename,
    //         html2canvas: { scale: 2 },
    //         jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    //       })
    //       .save();

    html2pdf()
      .from(html)
      .set({
        margin: 0.4,
        filename,
        // Increase the scale for better resolution
        html2canvas: {
          scale: 10, // Increase the scale to enhance quality (default is 2)
        },
        jsPDF: {
          unit: "in",
          format: "a4", // A4 paper size in mm (210mm x 297mm)
          orientation: "portrait", // Portrait orientation
        },
      })
      .save();
  };

  return (
    <>
      {/* Render the children (Tailwind component) */}
      {children}

      {/* Download PDF Button */}
      <Button
        variant="contained"
        color="primary"
        className="mt-6"
        onClick={downloadPdf}
      >
        Download PDF
      </Button>
    </>
  );
};

export default DownloadPDF;
