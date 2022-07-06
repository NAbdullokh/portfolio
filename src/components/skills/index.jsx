import React from "react";
import { Card, CardWrapper, Container } from "./style";
import skills from "../../mock/skills";

export const Skills = () => {
  return (
    <Container>
      <Container.Title>Skills</Container.Title>
      <Container.Info>I know and work in such programs as</Container.Info>
      <CardWrapper>
        {skills.map((value) => {
          return (
            <Card key={value.id}>
              <Card.Img src={value.img} alt="skills" />
              <Card.Title>{value.title}</Card.Title>
            </Card>
          );
        })}
      </CardWrapper>
    </Container>
  );
};
