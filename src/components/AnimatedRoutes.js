import React from 'react';
import {
    Route,
    Routes,
    Navigate,
    useLocation
  } from "react-router-dom";
  
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import Resume from "../components/Resume/ResumeNew";

const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route eaxct path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
    );
};

export default AnimatedRoutes;