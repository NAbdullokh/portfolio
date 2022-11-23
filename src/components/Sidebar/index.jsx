import React from "react";
import { useContext } from "react";
import { Cateogry } from "../../context/context";
import { Wrapper } from "./style";

const Sidebar = () => {
  const { open, setOpen } = useContext(Cateogry);
  return <Wrapper type={open}>Sidebar</Wrapper>;
};

export default Sidebar;
