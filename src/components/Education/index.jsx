import React, { useEffect } from "react";
import {
  Container,
  Content,
  Right,
  IconWrapper,
  Line,
  SideLine,
  Wrapper,
  Left,
} from "./style";
import { IoSchoolSharp } from "react-icons/io5";
import Aos from "aos";
import { useTranslation } from "react-i18next";

const Education = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const { t } = useTranslation();
  return (
    <Wrapper id="education">
      <Container>
        <Container.Title>
          <IoSchoolSharp style={{ marginRight: "5px" }} />
          {t("My")} <span>{t(" Education")}</span>
        </Container.Title>
        <p style={{ marginBottom: "20px" }}>
          {t(
            "Education Is Not The Learning Of Facts, But The Training Of The Mind To Think."
          )}
        </p>
        <Line>
          <SideLine type="first">
            <IconWrapper>
              <IoSchoolSharp />
            </IconWrapper>

            <Right data-aos="fade-up">
              <Content type="right">
                <Content.Title>PDP Academy</Content.Title>
                <Content.Desc>
                  <h3>Python Kids</h3>
                  <p>June 2021 - November 2021</p>
                </Content.Desc>
              </Content>
            </Right>

            <IconWrapper type="second">
              <IoSchoolSharp />
            </IconWrapper>

            <Left data-aos="fade-up">
              <Content type="left">
                <Content.Title>Web Brain Academy</Content.Title>
                <Content.Desc>
                  <h3>Frontend Development</h3>
                  <p>January 2022 - June 2022</p>
                </Content.Desc>
              </Content>
            </Left>

            <IconWrapper type="third">
              <IoSchoolSharp />
            </IconWrapper>

            <Right data-aos="fade-up" type="right2">
              <Content type="right2">
                <Content.Title>Web Brain Academy</Content.Title>
                <Content.Desc>
                  <h3>Interionship</h3>
                  <p>July 2022 - Avgust 2022</p>
                </Content.Desc>
              </Content>
            </Right>
          </SideLine>
        </Line>
      </Container>
    </Wrapper>
  );
};

export default Education;
