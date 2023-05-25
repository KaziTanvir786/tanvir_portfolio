import React, { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/my_pic.png";
// import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
// import { motion } from "framer-motion";

function Home() {

  const section_home2 = useRef(null);
  const section_home1 = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop, behavior: "smooth"
    })
  }

  return (
    // <motion.div
    //   initial={{ width: 0, }}
    //   animate={{ width: "100%" }}
    //   exit={{ x: window.innerWidth, transition: { duration: 0.001 } }}
    // >
    <section>
      <Container ref={section_home1} fluid className="home-section" id="home">
        {/* <Particle /> */}
        <Container className="home-content">
          <Row>
            <Col data-aos="fade-right" md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello!
                {/* <span className="wave" role="img" aria-labelledby="wave">
                  <i class="fa-solid fa-hand-wave"></i>
                </span> */}
              </h1>

              <h1 className="heading-name">
                This is
                <strong className="main-name"> Kazi Tanvir Akter</strong>
              </h1>

              <div style={{ padding: 20, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col data-aos="fade-left" className="img-container" md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "400px", borderRadius: "50%", marginLeft: "2%", animation: "glow-animation 2s ease-in-out 0s infinite alternate", animationPlayState: "running" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <div className="go-down-container">
        <div onClick={() => scrollToSection(section_home2)} style={{ cursor: "pointer" }} className="go-down" id="go-down-home">
          <i class="fa-solid fa-angle-down"></i>
        </div>
      </div>
      <div ref={section_home2} className="home2">
        <Home2 />
        <div className="go-top-container">
          <div onClick={() => scrollToSection(section_home1)} style={{ cursor: "pointer" }} className="go-top" id="go-top-home">
            <i class="fa-solid fa-angle-up"></i>
            <span style={{ fontSize: "16px" }}><b>TOP</b></span>
          </div>
        </div>
      </div>
    </section>
    // </motion.div>
  );
}

export default Home;
