import React, { useEffect } from "react";
import {
  Box1,
  Box2,
  BoxWrapper,
  Container,
  EachInfo,
  Info,
  InfoWrapper,
  Wrapper,
} from "./style";
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
          <Box1 data-aos="fade-up">
            <Box1.Img src={img} data-tilt />
          </Box1>
          <Box2 data-aos="fade-up">
            <Box2.Name>I'm Abdulloh</Box2.Name>
            <Box2.Job>Frontend Developer</Box2.Job>
            <Box2.Description>
              I am Fron-tend Developer. I study in 249 school at 9 th grade.I am
              an Information Technology undergraduate from WBA.I am very
              passionate about improving my coding skills & developing
              applications & websites. I build WebApps and Websites using
              Reactjs. Working for myself to improve my skills. Love to build
              Front-End clones.
            </Box2.Description>
            <InfoWrapper>
              <Info>
                <EachInfo>
                  Age: <span>15</span>
                </EachInfo>
                <EachInfo>
                  Phone: <span>+998 981153747</span>
                </EachInfo>
              </Info>

              <Info>
                <EachInfo>
                  Email : <span>country.abu@gmail.com</span>
                </EachInfo>
                <EachInfo>
                  Place : <span>Tashkent City</span>
                </EachInfo>
              </Info>
            </InfoWrapper>
          </Box2>
        </BoxWrapper>
      </Container>
    </Wrapper>
  );
};

export default About;
