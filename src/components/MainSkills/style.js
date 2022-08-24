import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  /* background-color: w; */
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
  }
`;

export const SkillsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
  flex-wrap: wrap;
  margin: 40px 0 40px 0;
`;
