import React from "react";
import Button from "../../generic/Button";
import { BtnWrap, Container, ItemsWrapper, Wrapper } from "./style";
import Nav from "./Hamburger/index";

const Navbar = () => {
  return (
    <Wrapper>
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
