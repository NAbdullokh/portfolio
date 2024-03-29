import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
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
import { VscGithub } from "react-icons/vsc";
import { TbBrandTelegram } from "react-icons/tb";
import { TbBrandInstagram } from "react-icons/tb";
import { SiCodewars } from "react-icons/si";
import { SiGmail } from "react-icons/si";
import resume from "../../assets/Nigmatullaev Abdulloh.pdf";
import Typewriter from "typewriter-effect";
import { useContext } from "react";
import { Cateogry } from "../../context/context";

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const { open, setOpen } = useContext(Cateogry);
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Container id="home">
        <Box1 data-aos="fade-right">
          <Box1.Title>
            {t("Hi There")} , <br />
            {t(`I'm Abdulloh Nigmatullaev`)}
          </Box1.Title>
          <Box1.Description>
            {t("I'm")}
            <span
              style={{
                color: "#ff7b00",
                marginLeft: "10px",
                fontWeight: "500",
              }}
            >
              <Typewriter
                options={{
                  strings: [
                    `${t("React Js Developer")}`,
                    `${t("Problem Solver")}`,
                    `${t("Human")}`,
                  ],
                  autoStart: true,
                  loop: true,
                }}
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
                style={{ color: "#161B22", transform: "scale(1.5)" }}
              />
            </EachIcon>

            <EachIcon
              type="instagram"
              target="_blank"
              href="https://instagram.com/a.nigmatullaev"
            >
              <TbBrandInstagram
                style={{ color: "white", transform: "scale(1.5)" }}
              />
            </EachIcon>

            <EachIcon
              type="telegram"
              target="_blank"
              href="https://t.me/abdullokh_3747"
            >
              <TbBrandTelegram
                style={{ color: "white", transform: "scale(1.5)" }}
              />
            </EachIcon>

            <EachIcon
              type="codewars"
              target="_blank"
              href="https://codewars.com/users/Abdulloh_07"
            >
              <SiCodewars style={{ color: "black", transform: "scale(1.5)" }} />
            </EachIcon>

            <EachIcon
              type="gmail"
              target="_blank"
              href="malito: country.abu@gmail.com"
            >
              <SiGmail style={{ color: "white", transform: "scale(1.5)" }} />
            </EachIcon>
          </IconWrapper>
          <ButtonWrapper href={resume} download>
            <Button width="191px" mr="25" type="primary" hover="secondary">
              {t("Dowland CV")}
            </Button>
          </ButtonWrapper>
        </Box1>

        <Box2 data-aos="fade-left">
          <Box2.Img className="manImg" data-tilt src={Img} />
        </Box2>
      </Container>
    </Wrapper>
  );
};

export default Main;
