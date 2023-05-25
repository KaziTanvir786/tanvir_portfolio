import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
// import { motion } from "framer-motion";

function About() {
  return (
    // <motion.div
    //   initial={{ width: 0 }}
    //   animate={{ width: "100%" }}
    //   exit={{ x: window.innerWidth, transition: { duration: 0.001 } }}
    // >
    <Container fluid className="about-section">
      {/* <Particle /> */}
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
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
    </Container>
    // </motion.div>
  );
}

export default About;
