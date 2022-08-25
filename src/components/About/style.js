import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 40px 0 40px 0;
  background-color: #e5ecfb;
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
  padding: 20px 0 20px 0;
  @media (max-width: 950px) {
    flex-direction: column;
  }
`;

export const Box1 = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

Box1.Img = styled.img`
  width: 40%;
  height: 95%;
  border-radius: 15px;
`;

export const Box2 = styled.div`
  flex: 1;
  @media (max-width: 950px) {
    padding-top: 50px;
  }
`;

Box2.Name = styled.p`
  font-size: 1.6rem;
  font-weight: 800;
  color: #002057;
`;

Box2.Job = styled.p`
  font-weight: 600;
`;

Box2.Description = styled.p`
  font-size: 1rem;
  color: #000;
  font-weight: 600;
  padding: 1rem 0;
`;

export const InfoWrapper = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  @media (max-width: 500px) {
    gap: 0;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EachInfo = styled.p`
  display: flex;
  color: var(--secondGreen);
  span {
    color: #000000;
    margin-left: 5px;
  }
`;
