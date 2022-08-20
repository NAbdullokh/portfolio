import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #313536;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 1px 4px rgba(146, 161, 176, 0.3);
  background-color: ${({ scrollNav }) => (scrollNav ? "gray" : "#313536")};
`;

export const Container = styled.div`
  padding: 0 20px;
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
  font-weight: 500;
  font-size: 22px;
  line-height: 31px;
  display: flex;
  align-items: center;
  text-align: center;
  color: var(--whiteColor);
  cursor: pointer;
  transition: 0.3s;
  :hover {
    color: var(--greenColor);
    border-bottom: 1px solid var(--greenColor);
  }
`;

export const BtnWrap = styled.div`
  @media (max-width: 950px) {
    display: none;
  }
`;
