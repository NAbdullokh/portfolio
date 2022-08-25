import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #e5ecfb;
  padding: 30px 0 50px 0;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: auto;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const Line = styled.div`
  position: relative;
  padding-bottom: 30px;
`;

export const SideLine = styled.div`
  padding: 20px 0 20px 0;
  width: 6px;
  height: 300px;
  background-color: #020133;
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: ${({ type }) =>
    type === "first"
      ? "20px"
      : type === "second"
      ? "130px"
      : type === "third"
      ? "240px"
      : "15px"};
  left: -15px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 4px solid #f68c09;
  background-color: white;
  display: flex;
  align-items: center;
  padding-left: 5px;
`;
