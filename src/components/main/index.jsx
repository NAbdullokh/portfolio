import React from "react";
import me from "../../assets/me.png";
import { Box1, Box2, Container } from "./style";

export const Main = () => {
  return (
    <Container>
      <Box1>
        <Box1.Name>Abdulloh Nigmatullaev</Box1.Name>
        <Box1.About>Frontend Developer</Box1.About>
        <Box1.Lang>RU | ENG</Box1.Lang>
      </Box1>
      <Box2>
        <Box2.Img src={me} alt="me" />
      </Box2>
    </Container>
  );
};
