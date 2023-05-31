import React, { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
// import { motion } from "framer-motion";

function About() {
  const top_section_about = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    // <motion.div
    //   initial={{ width: 0 }}
    //   animate={{ width: "100%" }}
    //   exit={{ x: window.innerWidth, transition: { duration: 0.001 } }}
    // >
    <Container ref={top_section_about} fluid className="about-section">
      {/* <Particle /> */}
      <Container>
        <Row
          className="overflow-hidden-res"
          style={{ justifyContent: "center", padding: "10px" }}
        >
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
            data-aos="fade-right"
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="blue">I am</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
            data-aos="fade-left"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 data-aos="fade-down" className="project-heading">
          Professional <strong className="blue">Skillset </strong>
        </h1>

        <Techstack />

        <h1 data-aos="fade-down" className="project-heading">
          <strong className="blue">Tools</strong> I use
        </h1>
        <Toolstack />
        <Github />
      </Container>
      <div className="go-top-container">
        <div
          onClick={() => scrollToSection(top_section_about)}
          style={{ cursor: "pointer" }}
          className="go-top"
          id="go-top-home"
        >
          <i className="fa-solid fa-angle-up"></i>
          <span style={{ fontSize: "16px" }}>
            <b>TOP</b>
          </span>
        </div>
      </div>
    </Container>
    // </motion.div>
  );
}

export default About;
