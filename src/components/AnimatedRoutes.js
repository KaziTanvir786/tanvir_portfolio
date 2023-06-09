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
import Certificates from './Certificates/Certificates';
import Education from './Education/Education';
import JobExperiences from './JobExperiences/JobExperiences';
// import { AnimatePresence } from 'framer-motion'

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    // <AnimatePresence>
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route eaxct path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/project" element={<Projects />} />
      <Route path="/about" element={<About />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/certificates" element={<Certificates />} />
      <Route path="/education" element={<Education />} />
      <Route path="/experiences" element={<JobExperiences />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    // </AnimatePresence>
  );
};

export default AnimatedRoutes;