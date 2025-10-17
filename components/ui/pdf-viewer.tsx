// components/ui/pdf-viewer.tsx
"use client";
import React from "react";

type PdfViewerProps = {
  pdfUrl: string;
};

const PdfViewer: React.FC<PdfViewerProps> = ({ pdfUrl }) => {
  const openPdf = () => {
    if (typeof window !== "undefined") {
      window.open(pdfUrl, "_blank");
    }
  };

  return (
    <button
      onClick={openPdf}
      className="text-teal-600 font-semibold py-2 rounded hover:text-teal-700 transition duration-300 ease-in-out cursor-pointer"
    >
      View Job Details
    </button>
  );
};

export default PdfViewer;
