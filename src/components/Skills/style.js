import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #000030;
  padding: 20px 0 50px 0;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  width: 100%;
  margin: auto;
  padding: 0 20px;
  border-radius: 15px;
`;

Container.Title = styled.p`
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
  flex-wrap: wrap;
  span {
    color: var(--greenColor);
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  width: 100%;
  padding: 20px;
  background-color: #34036d;
  border-radius: 15px;
  margin: 10px 0 50px 0;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* width: 12em;
  height: 120px; */
  flex: 1 1 10rem;
  padding: 10px 0 10px 0;
  background-color: #05001f;
  border-radius: 15px;
  cursor: pointer;
  :hover {
    box-shadow: 0 10px 10px #110252;
  }
`;

Card.Img = styled.img`
  width: 50px;
  height: 50px;
`;

Card.Title = styled.p`
  margin-top: 8px;
  font-size: 16px;
  color: white;
  font-weight: 600;
`;
