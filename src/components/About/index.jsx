import React, { useEffect } from "react";
import { Box1, Box2, BoxWrapper, Container, Wrapper } from "./style";
import { FaUser } from "react-icons/fa";
import img from "../../assets/img/myImg.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <Wrapper id="about">
      <Container>
        <Container.Title>
          <FaUser style={{ marginRight: "5px" }} /> About <span>me</span>
        </Container.Title>
        <BoxWrapper>
          {/* data-aos="zoom-in-right" */}
          <Box1>
            <Box1.Img src={img} data-tilt />
          </Box1>
          <Box2>
            <Box2.Name>I'm Abdulloh</Box2.Name>
            <Box2.Job>Frontend Developer</Box2.Job>
          </Box2>
        </BoxWrapper>
      </Container>
    </Wrapper>
  );
};

export default About;
