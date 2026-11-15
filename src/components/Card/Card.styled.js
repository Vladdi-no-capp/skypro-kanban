import { themeColors } from "../../theme.js";
import styled, { keyframes } from "styled-components";
export const CardButton = styled.a`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;

  div {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #94a6be;
  }
`;

export const CardContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CardTitle = styled.h3`
  margin-bottom: 10px;
  color: #000000;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
`;

export const CardDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  svg {
    width: 13px;
  }

  p {
    margin-left: 6px;
    color: #94a6be;
    font-size: 10px;
    line-height: 13px;
    letter-spacing: 0.2px;
  }
`;

const getTopicColors = (topic) => {
  return themeColors[topic] ?? themeColors.default;
};

const cardAnimation = keyframes`
  0% {
    height: 0;
    opacity: 0;
  }

  100% {
    height: auto;
    opacity: 1;
  }
`;

export const CardItem = styled.article`
  padding: 5px;
  animation: ${cardAnimation} 500ms linear;
`;

export const CardBox = styled.div`
  width: 220px;
  height: 130px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;
`;

export const CardGroup = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardTheme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  background-color: ${({ $topic }) => getTopicColors($topic).background};
  color: ${({ $topic }) => getTopicColors($topic).color};

  p {
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;
    color: inherit;
  }
`;