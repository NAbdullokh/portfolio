import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: #ffffff;
`;

Container.Title = styled.p`
  font-size: 34px;
  line-height: 42px;
  text-align: center;
  color: #070707;
`;

Container.Info = styled.p`
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #070707;
`;

export const CardWrapper = styled.div`
  width: 80%;
  margin: 100px auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 40px;
`;

Card.Img = styled.img`
  width: 100%;
  height: 100%;
`;

Card.Title = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 17px;
  text-align: center;
  color: #828282;
`;
