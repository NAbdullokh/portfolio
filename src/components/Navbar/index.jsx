import React, { useEffect, useState } from "react";
import Button from "../../generic/Button";
import {
  BtnWrap,
  Container,
  ItemsWrapper,
  TitleWrapper,
  Wrapper,
} from "./style";
import Nav from "./Hamburger/index";

const Navbar = () => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) setScrollNav(true);
    else setScrollNav(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  return (
    <Wrapper scrollNav={scrollNav}>
      <Container>
        <TitleWrapper>
          <Container.Title1 href="#">Abdulloh</Container.Title1>
          <Container.Title2 href="#">Abdulloh</Container.Title2>
        </TitleWrapper>
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
