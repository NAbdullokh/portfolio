import React from "react";
import { Container, Icon, IconWrapper } from "./style";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiCodewars } from "react-icons/si";

export const Contact = () => {
  return (
    <Container>
      <Container.Title>Contact</Container.Title>
      <Container.Description>
        Want to know more or just chat? You are welcome!
      </Container.Description>
      <IconWrapper>
        <Icon href="https://telegram.me/abdullokh_3747" target="_blank">
          <FaTelegram style={{ transform: "scale(2)", color: "#29AAEC" }} />
          <p>Telegram</p>
        </Icon>
        <Icon href="https://instagram.com/nigmatullaev.a" target="_blank">
          <FaInstagram style={{ transform: "scale(2)", color: "#FF653B" }} />
          <p>Instagram</p>
        </Icon>
        <Icon href="https://github.com/NAbdullokh" target="_blank">
          <FaGithub style={{ transform: "scale(2)", color: "#161B22" }} />
          <p>GitHub</p>
        </Icon>

        <Icon
          href="https://www.linkedin.com/in/abdulloh-undefined-210680238/"
          target="_blank"
        >
          <FaLinkedin style={{ transform: "scale(2)", color: "#0A66C2" }} />
          <p>Linkedin</p>
        </Icon>

        <Icon href="https://www.codewars.com/users/Abdulloh_07" target="_blank">
          <SiCodewars style={{ transform: "scale(2)", color: "#B1361E" }} />
          <p>CodeWars</p>
        </Icon>
      </IconWrapper>
    </Container>
  );
};
