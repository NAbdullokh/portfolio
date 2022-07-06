import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

Container.Title = styled.p`
  font-size: 34px;
  line-height: 42px;
  text-align: center;
  color: #070707;
`;

Container.Description = styled.p`
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #070707;
  width: 240px;
`;

export const IconWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap;
`;

export const Icon = styled.a`
  margin: 50px;
  height: 80px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;
