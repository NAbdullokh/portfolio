import styled from "styled-components";

export const Wrapper = styled.div`
  width: ${({ type }) => (type ? "350px" : "100px")};
  background-color: #212121;
`;
