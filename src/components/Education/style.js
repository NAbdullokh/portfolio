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
  @media (max-width: 700px) {
    margin-right: auto;
  }
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
      ? "245px"
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

export const Right = styled.div`
  content: " ";
  height: 0;
  position: absolute;
  top: ${({ type }) => (type === "right2" ? "250px" : "22px")};
  width: 0;
  /* top: 22px; */
  z-index: 1;
  left: 30px;
  border: medium solid #f68c09;
  border-width: 10px 10px 10px 0;
  border-color: transparent #f68c09 transparent transparent;
`;

export const Left = styled.div`
  content: " ";
  height: 0;
  position: absolute;
  top: 130px;
  width: 0;
  z-index: 1;
  right: 30px;
  border: medium solid #f68c09;
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent #f68c09;
  @media (max-width: 700px) {
    content: " ";
    height: 0;
    position: absolute;
    top: 130px;
    width: 0;
    z-index: 1;
    left: 30px;
    border: medium solid #f68c09;
    border-width: 10px 10px 10px 0;
    border-color: transparent #f68c09 transparent transparent;
  }
`;

export const Content = styled.div`
  background-color: #f68c09;
  position: relative;
  top: -15px;
  left: ${({ type }) =>
    type === "right" ? "10px" : type === "right2" ? "10px" : "-310px"};
  border-radius: 6px;
  width: 300px;
  height: 80px;
  padding-left: 20px;
  @media (max-width: 700px) {
    left: 10px;
  }
  @media (max-width: 400px) {
    width: 250px;
  }
  @media (max-width: 340px) {
    width: 220px;
  }
`;

Content.Title = styled.p``;

Content.Desc = styled.div``;
