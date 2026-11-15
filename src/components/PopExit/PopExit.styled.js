import styled from "styled-components";

export const ExitPopup = styled.div`
  z-index: 5;
  position: absolute;
  top: 0;
  left: 0;
  display: none;
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;

  &:target {
    display: block;
  }
`;

export const ExitContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ExitBlock = styled.div`
  display: block;
  max-width: 370px;
  width: 100%;
  margin: 0 auto;
  padding: 50px 60px;
  border: 0.7px solid #d4dbe5;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 4px 67px -12px rgba(0, 0, 0, 0.13);
`;

export const ExitTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.4px;
  text-align: center;
`;

const ExitButton = styled.button`
  width: 153px;
  height: 30px;
  border-radius: 4px;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.14px;
`;

export const ConfirmButton = styled(ExitButton)`
  margin-right: 10px;
  border: none;
  background-color: #565eef;
  color: #ffffff;

  &:hover {
    background-color: #33399b;
  }
`;

export const CancelButton = styled(ExitButton)`
  border: 0.7px solid #565eef;
  background-color: transparent;
  color: #565eef;

  &:hover {
    background-color: #33399b;
    color: #ffffff;
  }
`;

export const FormGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;