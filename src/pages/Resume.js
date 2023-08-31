import React from "react";
import { Document, Page, pdfjs } from 'react-pdf';
import resume from '../assets/Resume - Brian Tu Le.pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

function Resume() {
  return (
    <div className="resume">
      <Document 
        file={resume}
        onLoadError={console.error}
        style={{width: 'auto', height: 'auto'}}
      >
        <Page pageIndex={0} />
      </Document>
    </div>
  );
}

export default Resume;
