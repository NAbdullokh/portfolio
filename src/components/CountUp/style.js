import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 40px 0 40px 0;
  background-color: #313536;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  max-width: 1440px;
  width: 100%;
  /* height: 80px; */
  /* flex-wrap: wrap; */
  padding: 0 25px;
  margin: auto;
  @media (max-width: 810px) {
    flex-direction: column;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const IconWrap = styled.div`
  width: 99px;
  height: 99px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 228, 114, 0.2);
  border-radius: 62px;
`;

Box.Number = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 62px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  margin-top: 20px;
`;

Box.Title = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 37px;
  line-height: 62px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
`;
