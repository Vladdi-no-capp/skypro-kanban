import styled from "styled-components";
import { Link } from "react-router-dom";

export const AuthPage = styled.main`
  min-height: 100vh;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eaeef6;
`;

export const AuthCard = styled.section`
  width: 100%;
  max-width: 368px;
  padding: 42px 40px;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 10px 39px rgba(26, 56, 101, 0.12);
`;

export const AuthTitle = styled.h1`
  margin-bottom: 28px;
  color: #000000;
  font-size: 20px;
  line-height: 1.2;
  text-align: center;
`;

export const AuthForm = styled.form`
  display: grid;
  gap: 16px;
`;

export const Field = styled.label`
  display: grid;
  gap: 7px;
  color: #565eef;
  font-size: 13px;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 12px;
  border: 1px solid rgba(148, 166, 190, 0.4);
  border-radius: 6px;
  color: #000000;
  font: inherit;

  &:focus-visible {
    border-color: #565eef;
    outline: 2px solid rgba(86, 94, 239, 0.18);
  }
`;

export const SubmitButton = styled.button`
  height: 40px;
  margin-top: 4px;
  border: 0;
  border-radius: 4px;
  background-color: #565eef;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;

  &:hover {
    background-color: #33399b;
  }

  &:focus-visible {
    outline: 3px solid rgba(86, 94, 239, 0.3);
    outline-offset: 2px;
  }
`;

export const AuthHint = styled.p`
  margin-top: 20px;
  color: #94a6be;
  font-size: 14px;
  line-height: 1.4;
  text-align: center;
`;

export const AuthLink = styled(Link)`
  color: #565eef;
  text-decoration: underline;
`;
