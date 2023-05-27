import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ alignItems: "center", justifyContent: "center", paddingBottom: "10px" }}>
      <h1 data-aos="fade-down" className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="blue">Code</strong>
      </h1>
      <div data-aos="fade-up">
        <GitHubCalendar
          username="KaziTanvir786"
          blockSize={20}
          blockMargin={5}
          color="#1a85ff"
          fontSize={16}
        />
      </div>
    </Row>
  );
}

export default Github;
