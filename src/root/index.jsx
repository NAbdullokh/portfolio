import React from "react";
import About from "../components/About";
import Main from "../components/MainPart";
import MainSkills from "../components/MainSkills";
import Navbar from "../components/Navbar";
import Skills from "../components/Skills";

const Root = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <MainSkills />
    </div>
  );
};

export default Root;
