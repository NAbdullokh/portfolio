import React from "react";
import { NavLink } from "react-router-dom";
import navbar from "../../mock/navbar";
import { Box1 } from "../main/style";

import { Title, Ul, Lang } from "./style";
export const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      {navbar.map((value) => {
        return (
          <NavLink
            onClick={() => open.fn(false)}
            key={value.id}
            to={value.link}
          >
            <Title>{value.title}</Title>
          </NavLink>
        );
      })}
      <Lang>RU | ENG</Lang>;
    </Ul>
  );
};
export default RightNav;
