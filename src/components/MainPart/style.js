import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background-color: #252829;
`;

export const Container = styled.div`
  width: 100%;
  height: 92vh;
  margin: auto;
  max-width: 1440px;
  display: flex;
  padding: 0 20px;
  padding-bottom: 100px;
`;

export const Box1 = styled.div`
  flex: 1.5;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0px 0px 0px 0px;
`;

Box1.Title = styled.p`
  width: 90%;
  font-style: normal;
  font-weight: 400;
  font-size: 52px;
  line-height: 64px;
  display: flex;
  align-items: center;
  color: var(--whiteColor);
  margin-bottom: 40px;
`;

Box1.Description = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 39px;
  display: flex;
  align-items: center;
  color: var(--grayColor);
  margin-bottom: 30px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
`;

export const Box2 = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding-right: 20px; */
`;

Box2.Img = styled.img`
  width: 100%;
  border-radius: 50%;
  cursor: pointer;
`;
