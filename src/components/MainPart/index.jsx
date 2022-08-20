import React, { useEffect } from "react";
import Button from "../../generic/Button";
import Aos from "aos";
import "aos/dist/aos.css";
import { Box1, Box2, ButtonWrapper, Container, Wrapper } from "./style";
import Img from "../../assets/img/hero.png";
import Tilt from "react-vanilla-tilt";

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <Wrapper>
      <Container id="home">
        <Box1 data-aos="fade-right">
          <Box1.Title>
            I have lots of things to prove to myself. One is I can live my life
            fearlessly
          </Box1.Title>
          <Box1.Description>
            Web Developer, Problem Solver, and a Hiker
          </Box1.Description>
          <ButtonWrapper>
            <Button width="191px" mr="25" type="primary" hover="secondary">
              Dowland CV
            </Button>
            <Button width="191px" type="secondary" hover="primary">
              Contact
            </Button>
          </ButtonWrapper>
        </Box1>

        <Box2 data-aos="fade-left">
          <Tilt options={{ scale: 2, max: 25 }} style={{ background: "none" }}>
            <Box2.Img className="manImg" data-tilt src={Img} />
          </Tilt>
        </Box2>
      </Container>
    </Wrapper>
  );
};

export default Main;
