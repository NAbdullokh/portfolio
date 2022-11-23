import React from "react";
import { useState } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Count from "../components/CountUp";
import Education from "../components/Education";
import Footer from "../components/Footer";
import Main from "../components/MainPart";
import MainSkills from "../components/MainSkills";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Sidebar from "../components/Sidebar";
import Skills from "../components/Skills";
import { Content, Wrapper } from "./style";

const Root = () => {
  const [dark, setDark] = useState(true);
  return (
    <Wrapper>
      <Sidebar />
      <Content>
        {/* <Navbar darkNightMode={dark} setDark={setDark} /> */}
        <Main darkNightMode={dark} />
        <Count darkNightMode={dark} />
        <About darkNightMode={dark} />
        <Skills darkNightMode={dark} />
        <MainSkills darkNightMode={dark} />
        <Education darkNightMode={dark} />
        <Projects darkNightMode={dark} />
        <Contact darkNightMode={dark} />
        <Footer darkNightMode={dark} />
      </Content>
    </Wrapper>
  );
};

export default Root;
