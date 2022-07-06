import React from "react";
import { Container, Items } from "./style";
import navbar from "../../mock/navbar";
import { NavLink, Outlet } from "react-router-dom";
import Nav from "../Hamburger/index";

export const Navbar = () => {
  const active = ({ isActive }) => {
    return {
      color: isActive ? "green" : "gray",
    };
  };
  return (
    <>
      <Container>
        <Nav />
        {navbar.map((value) => {
          return (
            <NavLink style={active} key={value.id} to={value.link}>
              <Items>{value.title}</Items>
            </NavLink>
          );
        })}
      </Container>
      <Outlet />
    </>
  );
};
