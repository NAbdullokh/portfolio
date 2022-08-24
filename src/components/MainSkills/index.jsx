import React from "react";
import { Container, SkillsWrapper, Wrapper } from "./style";
import { RiFolderSettingsFill } from "react-icons/ri";
import html from "../../assets/img/html.png";
import css from "../../assets/img/css.png";
import js from "../../assets/img/js.png";
import react from "../../assets/img/react.png";

const MainSkills = () => {
  return (
    <Wrapper>
      <Container>
        <Container.Title>
          <RiFolderSettingsFill style={{ marginRight: "5px" }} />
          Main <span> skills</span>
        </Container.Title>
        <SkillsWrapper>
          <figure class="chart" data-percent="75">
            <figcaption></figcaption>
            <img class="html" src={html} alt="rasm" />
            <svg width="200" height="200">
              <circle
                class="outer"
                cx="95"
                cy="95"
                r="85"
                transform="rotate(-90, 95, 95)"
              />
            </svg>
            <p style={{ marginTop: "20px" }}>HTML</p>
          </figure>

          <figure class="chart" data-percent="75">
            <figcaption></figcaption>
            <img class="css" alt="rasm" src={css} />
            <svg width="200" height="200">
              <circle
                class="outer"
                cx="95"
                cy="95"
                r="85"
                transform="rotate(-90, 95, 95)"
              />
            </svg>
            <p style={{ marginTop: "20px" }}>CSS</p>
          </figure>

          <figure class="chart" data-percent="50">
            <figcaption></figcaption>
            <img class="javascript" alt="rasm" src={js} />
            <svg width="200" height="200">
              <circle
                class="outer"
                cx="95"
                cy="95"
                r="85"
                transform="rotate(-90, 95, 95)"
              />
            </svg>
            <p style={{ marginTop: "20px" }}>JAVASCRIPT</p>
          </figure>

          <figure class="chart" data-percent="50">
            <figcaption></figcaption>
            <img
              class="react"
              alt="rasm"
              src={react}
              style={{ height: "120px" }}
            />
            <svg width="200" height="200">
              <circle
                class="outer"
                cx="95"
                cy="95"
                r="85"
                transform="rotate(-90, 95, 95)"
              />
            </svg>
            <p style={{ marginTop: "20px" }}>REACT JS</p>
          </figure>
        </SkillsWrapper>
      </Container>
    </Wrapper>
  );
};

export default MainSkills;
