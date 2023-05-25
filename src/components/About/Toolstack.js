import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col data-aos="flip-up" xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col data-aos="flip-down" xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col data-aos="flip-up" xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col data-aos="flip-down" xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col data-aos="flip-up" xs={4} md={2} className="tech-icons">
        <SiHeroku />
      </Col>
    </Row>
  );
}

export default Toolstack;
