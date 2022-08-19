import React from "react";
import Button from "../../../generic/Button";

import { Title, Ul } from "./style";
export const RightNav = ({ open, setOpen }) => {
  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  return (
    <Ul open={open}>
      <Title onClick={() => setOpen(false)} href="#home">
        Home
      </Title>
      <Title onClick={() => setOpen(false)} href="#about">
        About
      </Title>
      <Title onClick={() => setOpen(false)} href="#skills">
        Skills
      </Title>
      <Title onClick={() => setOpen(false)} href="#clients">
        Clients
      </Title>
      <Title onClick={() => setOpen(false)} href="#blog">
        Blog
      </Title>
      <Button mr="40" width="190px" height="50px" href="#contact">
        Contact
      </Button>
    </Ul>
  );
};
export default RightNav;
