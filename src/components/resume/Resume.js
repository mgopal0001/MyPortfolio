import { Document, Page, pdfjs } from "react-pdf";
import React, { useState, useEffect } from "react";

import Button from "react-bootstrap/Button";
import pdf from "../../assets/MADAN-GOPAL.pdf";
import "./style.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


const Resume = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <>
      <div className="resume-con">
        <Button
          variant="primary"
          href={pdf}
          target="_blank"
          style={{ maxWidth: "250px" }}
        >
            Download CV
        </Button>
        <Document file={pdf}>
          <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} renderTextLayer={false}/>
        </Document>
        <Button
          variant="primary"
          href={pdf}
          target="_blank"
          style={{ maxWidth: "250px" }}
        >
            Download CV
        </Button>
      </div>
    </>
  );
};
export default Resume;
