import React, { useState } from "react";
import RightNav from "./RightNav";
import { StyledBurger } from "./style";

export const Burger = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <StyledBurger open={open} fn={setOpen} onClick={() => setOpen(!open)}>
        <div />
        <div style={{ width: "25px", marginLeft: "auto" }} />
        <div />
      </StyledBurger>
      <RightNav open={open} setOpen={setOpen} />
    </>
  );
};

export default Burger;
