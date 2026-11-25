import { useState } from "react";
import PopUser from "../PopUser/PopUser.jsx";
import { Container } from "../Common/Common.styled.js";
import {
  DarkLogo,
  HeaderBlock,
  HeaderNav,
  HeaderWrapper,
  Logo,
  NewTaskLink,
  UserLink,
} from "./Header.styled.js";

export default function Header() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <HeaderWrapper>
      <Container>
        <HeaderBlock>
          <Logo>
            <a href="#" aria-label="На главную">
              <img src="/images/logo.png" alt="Логотип Skypro" />
            </a>
          </Logo>
          <DarkLogo>
            <a href="#" aria-label="На главную">
              <img
                src="/images/logo_dark.png"
                alt="Логотип Skypro для тёмной темы"
              />
            </a>
          </DarkLogo>
          <HeaderNav aria-label="Основная навигация">
            <NewTaskLink id="btnMainNew" href="#popNewCard">
              Создать новую задачу
            </NewTaskLink>
            <UserLink href="#user-set-target" onClick={() => setIsUserMenuOpen((isOpen) => !isOpen)}>
              Ivan Ivanov
            </UserLink>
            {isUserMenuOpen && <PopUser />}
          </HeaderNav>
        </HeaderBlock>
      </Container>
    </HeaderWrapper>
  );
}
