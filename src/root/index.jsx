import React from "react";
import About from "../components/About";
import Education from "../components/Education";
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
      <About />
      <Skills />
      <MainSkills />
      <Education />
      <Projects />
    </div>
  );
};

export default Root;
