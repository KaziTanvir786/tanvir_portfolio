import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
// import Particle from "../Particle";
import pdf from "../../Assets/../Assets/CV of Kazi Tanvir Akter.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// import { motion } from "framer-motion";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://raw.githubusercontent.com/KaziTanvir786/tanvir_portfolio/master/src/Assets/CV of Kazi Tanvir Akter.pdf";
function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    // <motion.div
    //   initial={{ width: 0 }}
    //   animate={{ width: "100%" }}
    //   exit={{ x: window.innerWidth, transition: { duration: 0.001 } }}
    // >
    <Container fluid className="resume-section">
      {/* <Particle /> */}
      <Row data-aos="fade-down" style={{ justifyContent: "center", position: "relative" }}>
        <Button
          variant="primary"
          href={pdf}
          target="_blank"
          style={{ maxWidth: "250px", borderRadius: "5px" }}
        >
          <AiOutlineDownload />
          &nbsp;Download CV
        </Button>
      </Row>

      <Row data-aos="fade-up" data-aos-delay="1000" className="resume">
        <Document file={resumeLink} className="d-flex justify-content-center">
          <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
        </Document>
      </Row>
      <Row className="resume">
        <Document file={resumeLink} className="d-flex justify-content-center">
          <Page pageNumber={2} scale={width > 786 ? 1.7 : 0.6} />
        </Document>
      </Row>

      {/* <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row> */}

    </Container>
    // </motion.div >
  );
}

export default ResumeNew;
