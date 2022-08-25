import React from "react";
import { Container, IconWrapper, Line, SideLine, Wrapper } from "./style";
import { IoSchoolSharp } from "react-icons/io5";

const Education = () => {
  return (
    <Wrapper id="education">
      <Container>
        <Container.Title>
          <IoSchoolSharp style={{ marginRight: "5px" }} />
          My <span>Education</span>
        </Container.Title>
        <Line>
          <SideLine type="first">
            <IconWrapper>
              <IoSchoolSharp />
            </IconWrapper>

            <IconWrapper type="second">
              <IoSchoolSharp />
            </IconWrapper>

            <IconWrapper type="third">
              <IoSchoolSharp />
            </IconWrapper>
          </SideLine>
        </Line>
      </Container>
    </Wrapper>
  );
};

export default Education;
