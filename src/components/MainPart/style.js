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
  @media (max-width: 950px) {
    flex-direction: column;
    height: 100vh;
  }
`;

export const Box1 = styled.div`
  flex: 1.5;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 950px) {
    margin-top: 50px;
    margin-bottom: 50px;
    align-items: flex-start;
  }
`;

Box1.Title = styled.p`
  width: 100%;
  font-style: normal;
  font-weight: 600;
  font-size: 52px;
  line-height: 64px;
  display: flex;
  align-items: center;
  color: var(--whiteColor);
  margin-bottom: 40px;
  background-image: linear-gradient(
    -225deg,
    #ffffff 0%,
    #00e472 29%,
    #ff1361 67%,
    #fff800 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 5s linear infinite;
  display: inline-block;
  @media (max-width: 1050px) {
    font-size: 40px;
  }
  @media (max-width: 950px) {
    text-align: left;
    width: 100%;
  }
  @media (max-width: 500px) {
    font-size: 30px;
    line-height: 40px;
  }
  @keyframes textclip {
    to {
      background-position: 200% center;
    }
  }
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
  width: 80%;
  @media (max-width: 950px) {
    text-align: center;
  }
  @media (max-width: 500px) {
    font-size: 20px;
    line-height: 10px;
    line-height: 40px;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 30px;
`;

export const EachIcon = styled.a`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s;
  background-color: #03a84e;
  :hover {
    background-color: ${({ type }) =>
      type === "instagram"
        ? "#FF9E2F"
        : type === "github"
        ? "#F0F6FC"
        : type === "codewars"
        ? "#B1361E"
        : type === "gmail"
        ? "#FBBC04"
        : type === "telegram"
        ? "#29A9EA"
        : " "};
  }
`;

export const ButtonWrapper = styled.a`
  display: flex;
`;

export const Box2 = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

Box2.Img = styled.img`
  width: 100%;
  border-radius: 50%;
  cursor: pointer;
  @media (max-width: 950px) {
    width: 60%;
  }
`;
