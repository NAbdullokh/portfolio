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
// import img from "../../assets/img/myImg.jpg";
import img from "../../assets/img/myPic.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  const { t } = useTranslation();
  return (
    <Wrapper id="about">
      <Container>
        <Container.Title>
          <FaUser style={{ marginRight: "5px" }} />
          {t(" About ")} {""}
          <span>{t("me")}</span>
        </Container.Title>
        <BoxWrapper>
          <Box1 data-aos="fade-up">
            <Box1.Img src={img} data-tilt />
          </Box1>
          <Box2 data-aos="fade-up">
            <Box2.Name>{t("I'm Abdulloh")}</Box2.Name>
            <Box2.Job>{t("Frontend Developer")}</Box2.Job>
            <Box2.Description>
              {t(
                `I am Fron-tend Developer. I study in 249 school at 9 th grade.I am an Information Technology undergraduate from WBA.I am very passionate about improving my coding skills & developing applications & websites. I build WebApps and Websites using Reactjs. Working for myself to improve my skills. Love to build Front-End clones.`
              )}
            </Box2.Description>
            <InfoWrapper>
              <Info>
                <EachInfo>
                  {t("Age")}: <span>15</span>
                </EachInfo>
                <EachInfo>
                  {t("Phone")}: <span>+998 981153747</span>
                </EachInfo>
              </Info>

              <Info>
                <EachInfo>
                  {t("Email")} : <span>country.abu@gmail.com</span>
                </EachInfo>
                <EachInfo>
                  {t("Place")} : <span>Tashkent City</span>
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
