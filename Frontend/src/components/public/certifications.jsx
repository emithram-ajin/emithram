import { useState } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import Breadcrumbs from "./Breadcrumbs";

export default function Certificates() {
  const [showPdf, setShowPdf] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("");

  const handleBackdropClick = () => setShowPdf(false);

  const certificates = [
    { img: "/Recoginition.png", pdf: "/certificate.pdf" },
    { img: "/incorporation.png", pdf: "/certificate.pdf" },
    { img: "/startup.png", pdf: "/certificate.pdf" },
  ];

  return (
    <>
      <div className=" py-3 md:pl-14 pl-5">
        <Breadcrumbs />
      </div>
      <div className="flex flex-wrap gap-4 justify-center px-4 py-6 mt-20 mb-30">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer w-full sm:w-[48%] lg:w-[30%]"
            onClick={() => {
              setPdfUrl(cert.pdf);
              setShowPdf(true);
            }}
          >
            <img
              src={cert.img}
              alt={`Certificate ${index + 1}`}
              className="w-full h-auto object-contain"
            />
          </div>
        ))}
      </div>

      {/* PDF Modal */}
      {showPdf && (
        <div
          id="pdf-backdrop"
          onClick={handleBackdropClick}
          className="fixed inset-0  bg-opacity-60 z-50 flex items-center justify-center px-4"
        >
          <div
            className="relative bg-white rounded-xl overflow-hidden shadow-lg w-full max-w-6xl max-h-[90vh] p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* PDF Viewer */}
            <div className="h-[80vh] overflow-y-auto">
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                <Viewer fileUrl={pdfUrl} />
              </Worker>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
