import styled from "styled-components";

export const Wrapper = styled.div`
  /* width: ${({ type }) => (type ? "350px" : "70px")}; */
  width: 70px;
  background-color: #212121;
  transition: 0.5s;
  padding: 20px;
  :hover {
    width: 300px;
  }
`;
