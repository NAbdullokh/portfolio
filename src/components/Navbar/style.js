import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 1px 4px rgba(146, 161, 176, 0.3);
  background-color: ${({ scrollNav }) => (scrollNav ? "gray" : "#ffffff")};
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

export const TitleWrapper = styled.div`
  position: relative;
  bottom: 25%;
  margin-right: 80px;
`;

Container.Title1 = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  line-height: 44px;
  display: flex;
  align-items: center;
  color: var(--whiteColor);
  position: absolute;
  color: transparent;
  -webkit-text-stroke: 2px #03a9f4;
  /* transform: translate(-50%, -50%); */
`;

Container.Title2 = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  line-height: 44px;
  display: flex;
  align-items: center;
  color: var(--whiteColor);
  position: absolute;
  /* transform: translate(-50%, -50%); */
  color: #03a9f4;
  animation: animate 4s ease-in-out infinite;
  @keyframes animate {
    0%,
    100% {
      clip-path: polygon(
        0% 45%,
        16% 44%,
        33% 50%,
        54% 60%,
        70% 61%,
        84% 59%,
        100% 52%,
        100% 100%,
        0% 100%
      );
    }

    50% {
      clip-path: polygon(
        0% 60%,
        15% 65%,
        34% 66%,
        51% 62%,
        67% 50%,
        84% 45%,
        100% 46%,
        100% 100%,
        0% 100%
      );
    }
  }
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
  font-size: 20px;
  line-height: 31px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
  cursor: pointer;
  transition: 0.3s;
  :hover {
    color: #011aff;
    border-bottom: 1px solid var(--greenColor);
  }
`;

export const BtnWrap = styled.div`
  @media (max-width: 950px) {
    display: none;
  }
`;
