import React from "react";
import { Container } from "./style";

export const Button = ({
  children,
  onClick,
  height,
  width,
  type,
  hover,
  mr,
  ml,
  mb,
  mt,
  href,
}) => {
  return (
    <Container
      className="nocopy"
      mr={mr}
      ml={ml}
      mb={mb}
      mt={mt}
      hover={hover}
      type={type}
      width={width}
      height={height}
      onClick={onClick}
      children={children}
      href={href}
    >
      {children}
    </Container>
  );
};
export default Button;
