// import axios from "axios";
import React, { useEffect } from "react";
import { Card, CardWrapper, Container, Wrapper } from "./style";
import { FaLaptopMedical } from "react-icons/fa";
import Aos from "aos";
import { Languages } from "../../mock/skills";
import { useTranslation } from "react-i18next";

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const { t } = useTranslation();

  return (
    <Wrapper id="skills">
      <Container>
        <Container.Title>
          <FaLaptopMedical style={{ marginRight: "5px" }} />
          {t("Skills")} & <span>{t("Abilities")}</span>
        </Container.Title>
        <CardWrapper>
          {Languages.map((value) => {
            return (
              <Card data-aos="zoom-in" key={value.id}>
                <Card.Img src={value.icon} alt="" />
                <Card.Title>{value.title}</Card.Title>
              </Card>
            );
          })}
        </CardWrapper>
      </Container>
    </Wrapper>
  );
};

export default Skills;
