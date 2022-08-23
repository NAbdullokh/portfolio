import React from "react";
import About from "../components/About";
import Main from "../components/MainPart";
import Navbar from "../components/Navbar";
import Skills from "../components/Skills";

const Root = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
      <Skills />
    </div>
  );
};

export default Root;
