import React from "react";
import {
  Box,
  BoxWrapper,
  Container,
  Copyright,
  EachIcon,
  SocialMedia,
  Wrapper,
} from "./style";
import { AiFillPhone } from "react-icons/ai";
import { CgMail } from "react-icons/cg";
import { ImMap } from "react-icons/im";
import { VscGithub } from "react-icons/vsc";
import { TbBrandTelegram } from "react-icons/tb";
import { TbBrandInstagram } from "react-icons/tb";
import { SiCodewars } from "react-icons/si";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Wrapper>
      <Container>
        <BoxWrapper>
          <Box>
            <Box.Title>Abdulloh Nigmatullaev</Box.Title>
            <Box.Desc>
              Thank you for visiting my personal portfolio website. Connect with
              me over socials. <br /> <br /> Keep Rising 🚀. Connect with me
              over live chat!
            </Box.Desc>
          </Box>
          <Box>
            <Box.Title>Quick Links</Box.Title>
            <Box.Link href="#home">- Home</Box.Link>
            <Box.Link href="#about">- About</Box.Link>
            <Box.Link href="#skills">- Skills</Box.Link>
            <Box.Link href="#education">- Education</Box.Link>
            <Box.Link href="#projects">- Projects</Box.Link>
          </Box>
          <Box>
            <Box.Title>Contact Info</Box.Title>
            <Box.Link>
              <AiFillPhone style={{ color: "var(--greenColor)" }} /> +998
              98-115-37-47
            </Box.Link>
            <Box.Link>
              <CgMail style={{ color: "var(--greenColor)" }} />
              country.abu@gmail.com
            </Box.Link>
            <Box.Link>
              <ImMap style={{ color: "var(--greenColor)" }} /> Tashkent,
              Uzb-190160
            </Box.Link>
            <SocialMedia>
              <EachIcon>
                <a href="https://github.com/NAbdullokh" target="_blank">
                  <VscGithub style={{ transform: "scale(1.2)" }} />
                </a>
              </EachIcon>
              <EachIcon>
                <a href="https://instagram.com/a.nigmatullaev" target="_blank">
                  <TbBrandTelegram style={{ transform: "scale(1.2)" }} />
                </a>
              </EachIcon>
              <EachIcon>
                <a href="https://t.me/abdullokh_3747" target="_blank">
                  <TbBrandInstagram style={{ transform: "scale(1.2)" }} />
                </a>
              </EachIcon>
              <EachIcon>
                <a
                  href="https://codewars.com/users/Abdulloh_07"
                  target="_blank"
                >
                  <SiCodewars style={{ transform: "scale(1.2)" }} />
                </a>
              </EachIcon>
              <EachIcon>
                <a href="malito: country.abu@gmail.com" target="_blank">
                  <SiGmail style={{ transform: "scale(1.2)" }} />
                </a>
              </EachIcon>
            </SocialMedia>
          </Box>
        </BoxWrapper>
        <hr />
        <Copyright>
          Copyright © {year} CreativeLayers. All Right Reserved.
        </Copyright>
      </Container>
    </Wrapper>
  );
};

export default Footer;
