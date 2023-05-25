import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Particle from "./components/Particle";
import {
  BrowserRouter as Router
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AnimatedRoutes from "./components/AnimatedRoutes";

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Particle />
        <AnimatedRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
