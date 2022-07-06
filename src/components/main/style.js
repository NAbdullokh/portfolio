import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  height: 600px;
  display: flex;
  flex-direction: column;
  margin: auto;
`;

export const Box1 = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  @media (max-width: 420px) {
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

Box1.Name = styled.div`
  font-size: 47.3392px;
  width: 120px;
  color: #070707;
  @media (max-width: 870px) {
    font-size: 25px;
  }
`;

Box1.About = styled.div`
  margin-top: 0px;
  font-size: 18px;
  color: #070707;
`;

Box1.Lang = styled.div`
  font-size: 16px;
  line-height: 20px;
  color: #828282;
  transform: rotate(-90deg);
  @media (max-width: 500px) {
    display: none;
  }
`;

export const Box2 = styled.div`
  flex: 5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

Box2.Img = styled.img`
  width: 100%;
  height: 387px;
`;
