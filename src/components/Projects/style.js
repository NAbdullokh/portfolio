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
  padding: 0px 0 40px 0;
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

export const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  gap: 30px;
  margin: 10px 0 30px 0;
`;

export const Btn = styled.button`
  width: 150px;
  padding: 10px;
  height: 40px;
  border: 1px solid white;
  color: white;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000030;
  cursor: pointer;
  :active {
    transform: scale(0.98);
    opacity: 0.7;
  }
`;

export const active = {
  background: "white",
  color: "#000030",
};

export const ProjectWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  gap: 1.5rem;
`;

export const Card = styled.div`
  flex: 1 1 20rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.7rem 1rem rgba(0, 0, 0, 0.3);
  margin-bottom: 30px;
`;

Card.Img = styled.img`
  width: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  height: 200px;
`;

Card.Footer = styled.div`
  height: 30%;
  width: 100%;
  background-color: yellow;
  position: absolute;
  top: 85%;
  left: 0;
  display: flex;
  align-items: center;
  padding-left: 20px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  transition: 0.2s;
  :hover {
    height: 100%;
    top: 15%;
  }
`;
