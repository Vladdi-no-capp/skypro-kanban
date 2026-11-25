import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
`;

export const HeaderBlock = styled.div`
  position: relative;
  top: 0;
  left: 0;
  height: 70px;
  padding: 0 10px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  img {
    width: 85px;
  }
`;

export const DarkLogo = styled(Logo)`
  display: none;
`;

export const HeaderNav = styled.nav`
  max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NewTaskLink = styled.a`
  width: 178px;
  height: 30px;
  margin-right: 20px;
  border: none;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #565eef;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;

  &:hover {
    background-color: #33399b;
  }

  @media screen and (max-width: 495px) {
    z-index: 3;
    position: fixed;
    left: 16px;
    bottom: 30px;
    top: auto;
    width: calc(100vw - 32px);
    height: 40px;
    margin-right: 0;
  }
`;

export const UserLink = styled.a`
  height: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  color: #565eef;
  font-size: 14px;
  line-height: 20px;

  &::after {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    margin: -6px 0 0 5px;
    padding: 0;
    border-left: 1.9px solid #565eef;
    border-bottom: 1.9px solid #565eef;
    border-radius: 1px;
    transform: rotate(-45deg);
  }

  &:hover {
    color: #33399b;
  }

  &:hover::after {
    border-left-color: #33399b;
    border-bottom-color: #33399b;
  }
`;