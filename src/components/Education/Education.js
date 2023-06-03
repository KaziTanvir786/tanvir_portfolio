import React from "react";
import { Image } from "react-bootstrap";

const Education = () => {
  return (
    <div>
      <h1
        data-aos="fade-down"
        style={{ margin: "120px 0px 20px 0px", color: "white" }}
      >
        My{" "}
        <span className="blue">
          <b>Education</b>
        </span>
      </h1>
      <div className="edu-container">
        <div className="edu-bar"></div>
        <div className="edu-bar-circle-1"></div>
        <div className="edu-bar-circle-2"></div>
        <div className="edu-bar-circle-3"></div>
        <div className="edu-items">
          <div className="edu-item">
            <div className="edu-description">
              <h2>Bachelor of Science in Computer Science and Engineering</h2>
              <h3>North South University</h3>
              <h3>Dhaka, Bangladesh</h3>
              <h4>GPA: 3.65/4.0</h4>
            </div>
            <div className="edu-logo">
              <Image
                className="edu-logo-img"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/North_South_University_Monogram.svg/640px-North_South_University_Monogram.svg.png"
              />
            </div>
          </div>
          <div className="edu-item">
            <div className="edu-description">
              <h2>Bachelor of Science in Computer Science</h2>
              <h3>University of California, Riverside</h3>
              <h4>GPA: 4.0/4.0</h4>
            </div>
            <div className="edu-logo">
              <Image
                className="edu-logo-img"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/North_South_University_Monogram.svg/640px-North_South_University_Monogram.svg.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
