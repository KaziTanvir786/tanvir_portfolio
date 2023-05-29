import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Certificate1 from "../../Assets/Certificates/hour_of_code.jpg";
import Certificate2 from "../../Assets/Certificates/programming_hero.jpg";
import Certificate3 from "../../Assets/Certificates/4ir-skills-summit.png";
import Certificate4 from "../../Assets/Certificates/day_of_mathematics.jpg";

const Certificates = () => {
  return (
    <div>
      <h1
        data-aos="flip-down"
        style={{ margin: "120px 0px 80px 0px", color: "white" }}
      >
        Certificates I{" "}
        <span className="blue">
          <b>Achieved</b>
        </span>
      </h1>
      <Container>
        <Row>
          <Col
            data-aos="flip-right"
            sm={12}
            lg={6}
            className="certificate-card"
          >
            <Image className="certificate-image" src={Certificate1} fluid />
          </Col>
          <Col data-aos="flip-left" sm={12} lg={6} className="certificate-card">
            <Image className="certificate-image" src={Certificate2} fluid />
          </Col>
          <Col
            data-aos="flip-right"
            sm={12}
            lg={6}
            className="certificate-card"
          >
            <Image className="certificate-image" src={Certificate3} fluid />
          </Col>
          <Col data-aos="flip-left" sm={12} lg={6} className="certificate-card">
            <Image className="certificate-image" src={Certificate4} fluid />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Certificates;
