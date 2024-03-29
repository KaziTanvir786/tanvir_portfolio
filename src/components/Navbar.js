import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/Tanvir-Signature-wh.png";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";
import { TbSchool } from "react-icons/tb";
import { BiBriefcase } from "react-icons/bi";
import { IoRibbonOutline } from "react-icons/io5";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          {/* <img src={logo} className="img-fluid logo" alt="brand" /> */}
          <h2 className="logo-text">Kazi Tanvir Akter</h2>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item className="nav-item">
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome className="nav-icon" />
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="nav-item">
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser className="nav-icon" />
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="nav-item">
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen className="nav-icon" />
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="nav-item">
              <Nav.Link
                as={Link}
                to="/certificates"
                onClick={() => updateExpanded(false)}
              >
                <IoRibbonOutline className="nav-icon" />
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="nav-item">
              <Nav.Link
                as={Link}
                to="/education"
                onClick={() => updateExpanded(false)}
              >
                <TbSchool className="nav-icon" />
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="nav-item">
              <Nav.Link
                as={Link}
                to="/experiences"
                onClick={() => updateExpanded(false)}
              >
                <BiBriefcase className="nav-icon" />
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="nav-item">
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument className="nav-icon" />
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
