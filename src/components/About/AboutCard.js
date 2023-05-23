import React from "react";
import Card from "react-bootstrap/Card";
import { TfiQuoteLeft, TfiQuoteRight } from "react-icons/tfi";
import { TiPointOfInterest } from "react-icons/ti";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kazi Tanvir Akter </span>
            from <span className="purple"> Dhaka, Bangladesh.</span>
            <br />I am a CSE graduate from North South University, pursuing my higher studies in abroad.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <TiPointOfInterest /> Playing Games
            </li>
            <li className="about-activity">
              <TiPointOfInterest /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <TiPointOfInterest /> Playing Guitar
            </li>
            <li className="about-activity">
              <TiPointOfInterest /> Drawing Sketches
            </li>
            <li className="about-activity">
              <TiPointOfInterest /> Travelling
            </li>
          </ul>

          <p style={{ color: "#1a85ff" }}>
            <b>"Technology is the conversion of our imagination into reality!"</b>
          </p>
          <footer className="blockquote-footer"><b>Kazi Tanvir Akter</b></footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
