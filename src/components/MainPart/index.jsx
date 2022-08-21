import React, { useEffect } from "react";
import Button from "../../generic/Button";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  Box1,
  Box2,
  ButtonWrapper,
  Container,
  EachIcon,
  IconWrapper,
  Wrapper,
} from "./style";
import Img from "../../assets/img/hero.png";
import Tilt from "react-vanilla-tilt";
import { VscGithub } from "react-icons/vsc";
import { TbBrandTelegram } from "react-icons/tb";
import { TbBrandInstagram } from "react-icons/tb";
import { SiCodewars } from "react-icons/si";
import { SiGmail } from "react-icons/si";
import { Typewriter } from "react-simple-typewriter";
// import "react-simple-typewriter/dist/index.css";

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  const typeWriter = ["React JS Developer", "Problem Solver", "Human"];
  return (
    <Wrapper>
      <Container id="home">
        <Box1 data-aos="fade-right">
          <Box1.Title>
            Hi There , <br />
            I'm Abdulloh Nigmatullaev
          </Box1.Title>
          <Box1.Description>
            I'm
            <span
              style={{ color: "red", marginLeft: "10px", fontWeight: "500" }}
            >
              <Typewriter
                loop
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={100}
                delaySpeed={100}
                words={typeWriter}
              />
            </span>
          </Box1.Description>
          <IconWrapper>
            <EachIcon
              type="github"
              target="_blank"
              href="https://github.com/NAbdullokh"
            >
              <VscGithub
                style={{ color: "#09011b", transform: "scale(1.5)" }}
              />
            </EachIcon>

            <EachIcon
              type="instagram"
              target="_blank"
              href="https://instagram.com/a.nigmatullaev"
            >
              <TbBrandInstagram
                style={{ color: "#09011b", transform: "scale(1.5)" }}
              />
            </EachIcon>

            <EachIcon
              type="telegram"
              target="_blank"
              href="https://t.me/abdullokh_3747"
            >
              <TbBrandTelegram
                style={{ color: "#09011b", transform: "scale(1.5)" }}
              />
            </EachIcon>

            <EachIcon
              type="codewars"
              target="_blank"
              href="https://codewars.com/users/Abdulloh_07"
            >
              <SiCodewars
                style={{ color: "#09011b", transform: "scale(1.5)" }}
              />
            </EachIcon>

            <EachIcon
              type="gmail"
              target="_blank"
              href="malito: country.abu@gmail.com"
            >
              <SiGmail style={{ color: "#09011b", transform: "scale(1.5)" }} />
            </EachIcon>
          </IconWrapper>
          <ButtonWrapper>
            <Button width="191px" mr="25" type="primary" hover="secondary">
              Dowland CV
            </Button>
          </ButtonWrapper>
        </Box1>

        <Box2 data-aos="fade-left">
          <Tilt
            options={{ scale: 2, max: 25 }}
            style={{
              background: "none",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box2.Img className="manImg" data-tilt src={Img} />
          </Tilt>
        </Box2>
      </Container>
    </Wrapper>
  );
};

export default Main;
