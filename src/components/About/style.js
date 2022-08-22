import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 20px 0 20px 0;
`;

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  height: 100%;
  padding: 0 25px;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

Container.Title = styled.p`
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

export const BoxWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 50px;
  background-color: red;
  @media (max-width: 950px) {
    flex-direction: column;
  }
`;

export const Box1 = styled.div`
  flex: 1;
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */
  /* background-color: red; */
`;

Box1.Img = styled.img`
  width: 100%;
  height: fit-content;
  transform: scale(0.4);
  border-radius: 15px;
`;

export const Box2 = styled.div`
  flex: 1;
`;

Box2.Name = styled.p`
  font-size: 1.6rem;
  font-weight: 800;
  color: #002057;
`;

Box2.Job = styled.p`
  font-weight: 600;
`;
