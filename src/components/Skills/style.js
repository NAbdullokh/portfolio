import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  gap: 20px;
  background-color: green;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 12rem;
  padding: 10px 0 10px 0;
  background-color: red;
  border-radius: 15px;
`;

Container.Img = styled.img`
  width: 80px;
  height: 80px;
`;
