import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #313536;
`;

export const Container = styled.div`
  padding: 0 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1440px;
  width: 100%;
  height: 80px;
`;

Container.Title = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 44px;
  display: flex;
  align-items: center;
  color: var(--whiteColor);
`;

export const ItemsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  @media (max-width: 950px) {
    display: none;
  }
`;

ItemsWrapper.Items = styled.a`
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 31px;
  display: flex;
  align-items: center;
  text-align: center;
  color: var(--whiteColor);
  cursor: pointer;
`;

export const BtnWrap = styled.div`
  @media (max-width: 950px) {
    display: none;
  }
`;
