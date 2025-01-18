import React from "react";
import './App.css';
import Navbar from "./Components/NavBar";
import About from "./Components/About"
import Home from "./Components/Home"
import Service from"./Components/Service"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"

export default function App() {
  return (
    <div className="page-container">
    <Navbar />
    <div id="home">
      <Home />
    </div>
    <div id="about">
      <About />
    </div>
    <div id="service">
      <Service />
    </div>
    <div id="projects">
      <Projects />
    </div>
    <div id="contact">
      <Contact />
    </div>
    <Footer />
  </div>
  
  );
}
