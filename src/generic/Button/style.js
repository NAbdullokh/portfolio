import styled from "styled-components";

const getType = (type) => {
  switch (type) {
    case "primary":
      return {
        color: "white",
        background: "var(--secondGreen)",
        borderRadius: "38px",
      };
    case "secondary":
      return {
        color: "white",
        borderRadius: "38px",
        border: "1px solid var(--secondGreen)",
      };
    default:
      return {
        color: "white",
        background: "var(--secondGreen)",
      };
  }
};

const getHover = (hover) => {
  switch (hover) {
    case "primary":
      return {
        backgroundColor: "#00e472",

        border: "1px solid var(--secondGreen)",
      };
    case "secondary":
      return {
        backgroundColor: "#252829",
        border: "1px solid var(--secondGreen)",
      };
    default:
      return {
        color: "white",
        background: "var(--secondGreen)",
      };
  }
};

const Container = styled.a`
  display: flex;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  justify-content: center;
  align-items: center;
  height: ${({ height }) => height || "50px"};
  min-width: ${({ width }) => (width ? width : "100%")};
  width: ${({ width }) => (width ? width : "100%")};
  border-radius: 6px;
  margin-right: ${({ mr }) => `${mr}px`};
  margin-left: ${({ ml }) => `${ml}px`};
  margin-top: ${({ mt }) => `${mt}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
  cursor: pointer;
  ${({ type }) => getType(type)}
  :active {
    transform: scale(0.98);
    opacity: 0.7;
  }
  :hover {
    ${({ hover }) => getHover(hover)}
  }
`;

export { Container };
