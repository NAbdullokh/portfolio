import React, { useContext, useMemo } from "react";
import { Cateogry } from "../../context/context";
import { BtnItem } from "../../mock/btn";
import { ProjectData } from "../../mock/projects";
import {
  BtnWrapper,
  Card,
  Container,
  ProjectWrapper,
  Wrapper,
  Btn,
  active,
  Footer,
  Details,
  BtnWrapper2,
  Btn2,
} from "./style";
import { BiCodeAlt } from "react-icons/bi";
import { BsEyeFill } from "react-icons/bs";

const Projects = () => {
  const { type, setType } = useContext(Cateogry);
  const filtered = useMemo(() => {
    if (type === "all") return ProjectData;
    return ProjectData.filter((item) => item.type === type);
  }, [type]);
  return (
    <Wrapper id="projects">
      <Container>
        <Container.Title>
          My <span>Projects</span>
        </Container.Title>
        <BtnWrapper>
          {BtnItem.map((value) => {
            return (
              <Btn
                style={type === value.status ? active : null}
                key={value.id}
                onClick={() => setType(value.status)}
              >
                {value.title}
              </Btn>
            );
          })}
        </BtnWrapper>
        <ProjectWrapper>
          {filtered.map((value) => {
            return (
              <Card data-aos="zoom-in-up" key={value.id}>
                <Card.Img src={value.img} />
                <Footer>
                  <p>{value.title}</p>
                  <Details>
                    <Footer.Desc>{value.desc}</Footer.Desc>
                    <BtnWrapper2>
                      <Btn2 href={value.demo}>
                        <BsEyeFill /> View
                      </Btn2>
                      <Btn2 href={value.code}>
                        <BiCodeAlt /> Code
                      </Btn2>
                    </BtnWrapper2>
                  </Details>
                </Footer>
              </Card>
            );
          })}
        </ProjectWrapper>
      </Container>
    </Wrapper>
  );
};

export default Projects;
