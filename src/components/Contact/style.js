import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 50px 0 50px 0;
  background-color: #e5ecfb;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 0 25px;
  margin: auto;
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
    margin-left: 5px;
  }
`;

export const InputWrapper = styled.div`
  width: 60%;
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 20px;
  @media (max-width: 700px) {
    width: 100%;
    padding: 0;
  }
`;

InputWrapper.Title = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 33px;
  display: flex;
  align-items: center;
  color: #abaeb0;
  margin: 20px 0 0 0;
`;

InputWrapper.Input = styled.input`
  outline: none;
  border-radius: 10px;
  width: 100%;
  height: 50px;
  border: 3px solid #abaeb0;
  padding-left: 20px;
  padding: 0 20px 0 20px;
  :focus {
    border: 3px solid #00e472;
  }
`;

InputWrapper.Area = styled.textarea`
  outline: none;
  border-radius: 10px;
  width: 100%;
  border: 3px solid #abaeb0;
  padding: 10px 10px 10px 20px;
  :focus {
    border: 3px solid #00e472;
  }
`;

export const Btn = styled.button`
  margin-top: 20px;
  border: none;
  outline: none;
  width: 150px;
  height: 50px;
  border-radius: 8px;
  background-color: #2506ad;
  color: white;
  box-shadow: 0px 5px 10px rgba(48, 68, 247, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: auto;
  :active {
    opacity: 0.7%;
    transform: scale(0.98);
  }
  :hover {
    opacity: 0.7;
  }
`;
