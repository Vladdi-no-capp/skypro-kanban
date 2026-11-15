import styled from "styled-components";

const UserText = styled.p`
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
`;

export const PopUserWrapper = styled.div`
  z-index: 2;
  position: absolute;
  top: 61px;
  right: 0;
  width: 213px;
  height: 205px;
  padding: 34px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 10px 39px rgba(26, 56, 101, 0.21);
  text-align: center;
`;

export const UserName = styled(UserText)`
  margin-bottom: 4px;
  color: #000000;
  font-weight: 500;
`;

export const UserMail = styled(UserText)`
  margin-bottom: 10px;
  color: #94a6be;
`;

export const ThemeRow = styled.div`
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ThemeText = styled(UserText)`
  color: #000000;
`;

export const ThemeCheckbox = styled.input`
  position: relative;
  width: 24px;
  height: 13px;
  border-radius: 100px;
  background-color: #eaeef6;
  outline: none;
  appearance: none;

  &::before {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: #94a6be;
    transition: 0.5s;
  }

  &:checked::before {
    left: 12px;
  }
`;

export const LogoutButton = styled.button`
  width: 72px;
  height: 30px;
  border: 1px solid #565eef;
  border-radius: 4px;
  background-color: transparent;
  color: #565eef;

  &:hover {
    background-color: #33399b;
    color: #ffffff;
  }
`;