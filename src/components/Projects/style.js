import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #000030;
  padding: 50px 0 50px 0;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: auto;
  padding: 0 25px;
`;

Container.Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0 20px 0;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 26px;
  text-align: center;
  letter-spacing: 0.13em;
  color: var(--grayColor);
  cursor: pointer;
  span {
    color: var(--greenColor);
  }
`;
