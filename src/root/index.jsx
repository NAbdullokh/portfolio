import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Count from "../components/CountUp";
import Education from "../components/Education";
import Footer from "../components/Footer";
import Main from "../components/MainPart";
import MainSkills from "../components/MainSkills";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Root = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <Count />
      <About />
      <Skills />
      <MainSkills />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Root;
