import styled from "styled-components";
import { Link } from "react-router-dom";

export const NotFoundMain = styled.main`
  min-height: 100vh;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  background-color: #eaeef6;
  text-align: center;
`;

export const ErrorCode = styled.p`
  color: #565eef;
  font-size: clamp(72px, 18vw, 150px);
  font-weight: 700;
  line-height: 0.9;
`;

export const NotFoundTitle = styled.h1`
  color: #000000;
  font-size: 28px;
`;

export const HomeLink = styled(Link)`
  margin-top: 10px;
  padding: 10px 18px;
  border-radius: 4px;
  background-color: #565eef;
  color: #ffffff;

  &:hover {
    background-color: #33399b;
  }
`;
