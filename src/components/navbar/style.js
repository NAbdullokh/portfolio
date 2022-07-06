import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  height: 80px;
  margin: auto;
  border-bottom: 1px solid #828282;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 500px) {
    width: 90%;
    border: none;
  }
`;

export const Items = styled.a`
  font-size: 18px;
  line-height: 22px;
  color: #828282;
  text-decoration: none;
  @media (max-width: 500px) {
    display: none;
  }
`;
