import React from "react";
import About from "../components/About";
import Main from "../components/MainPart";
import Navbar from "../components/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
    </div>
  );
};

export default Root;
