import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #000033;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 20px 25px 20px 25px;
`;

export const BoxWrapper = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

export const Box = styled.div`
  flex: 1 1 25rem;
`;

Box.Title = styled.p`
  font-size: 2rem;
  color: #fff;
  padding-bottom: 1rem;
  font-weight: normal;
`;

Box.Desc = styled.p`
  font-size: 0.9rem;
  color: #ccc;
  padding: 0.7rem 0;
  text-transform: none;
`;

Box.Link = styled.a`
  font-size: 1rem;
  color: rgb(238, 238, 238);
  padding: 0.3rem 0;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  :hover {
    color: var(--greenColor);
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 10px;
`;

export const EachIcon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: white;
  :hover {
    background: #079dd9;
    box-shadow: 0px 12px 30px rgba(7, 157, 217, 0.19);
    transform: scale(0.98);
    border: 1px solid rgb(180, 178, 178);
    color: #ffae00;
  }
  a {
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Copyright = styled.p`
  text-align: center;
  color: white;
  padding-top: 20px;
`;
