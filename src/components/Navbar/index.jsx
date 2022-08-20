import React, { useEffect, useState } from "react";
import Button from "../../generic/Button";
import { BtnWrap, Container, ItemsWrapper, Wrapper } from "./style";
import Nav from "./Hamburger/index";
import Aos from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) setScrollNav(true);
    else setScrollNav(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  return (
    <Wrapper scrollNav={scrollNav} data-aos="fade-bottom">
      <Container>
        <Container.Title href="#">Abdulloh</Container.Title>
        <ItemsWrapper>
          <ItemsWrapper.Items href="#home">Home</ItemsWrapper.Items>
          <ItemsWrapper.Items href="#about">About</ItemsWrapper.Items>
          <ItemsWrapper.Items href="#skills">Skills</ItemsWrapper.Items>
          <ItemsWrapper.Items href="#clients">Clients</ItemsWrapper.Items>
          <ItemsWrapper.Items href="#blog">Blog</ItemsWrapper.Items>
        </ItemsWrapper>
        <Nav />
        <BtnWrap>
          <Button width="190px" height="50px" href="#contact">
            Contact
          </Button>
        </BtnWrap>
      </Container>
    </Wrapper>
  );
};

export default Navbar;
