import React, { useEffect, useState } from "react";
import Button from "../../generic/Button";

import Nav from "./Hamburger/index";
import { useTranslation } from "react-i18next";
import LanguageDropdownComponent from "../LanguageDropDown";
import {
  Wrapper,
  Container,
  ItemsWrapper,
  TitleWrapper,
  BtnWrap,
} from "./style";
import { useContext } from "react";
import { Cateogry } from "../../context/context";
import { StyledBurger } from "./Hamburger/style";

const Navbar = () => {
  const [scrollNav, setScrollNav] = useState(false);

  const { open, setOpen } = useContext(Cateogry);

  const changeNav = () => {
    if (window.scrollY >= 80) setScrollNav(true);
    else setScrollNav(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const { t } = useTranslation();
  return (
    <Wrapper scrollNav={scrollNav}>
      <Container>
        <TitleWrapper>
          <Container.Title1 href="#">Abdulloh</Container.Title1>
          <Container.Title2 href="#">Abdulloh</Container.Title2>
        </TitleWrapper>
        <LanguageDropdownComponent />
        <Nav />
      </Container>
    </Wrapper>
  );
};

export default Navbar;
