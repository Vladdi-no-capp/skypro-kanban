import { useState } from "react";
import { Link } from "react-router-dom";
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
            <Link to="/" aria-label="На главную">
              <img src="/images/logo.png" alt="Логотип Skypro" />
            </Link>
          </Logo>
          <DarkLogo>
            <Link to="/" aria-label="На главную">
              <img
                src="/images/logo_dark.png"
                alt="Логотип Skypro для тёмной темы"
              />
            </Link>
          </DarkLogo>
          <HeaderNav aria-label="Основная навигация">
            <NewTaskLink id="btnMainNew" to="/new-card">
              Создать новую задачу
            </NewTaskLink>
            <UserLink type="button" onClick={() => setIsUserMenuOpen((isOpen) => !isOpen)}>
              Ivan Ivanov
            </UserLink>
            {isUserMenuOpen && <PopUser />}
          </HeaderNav>
        </HeaderBlock>
      </Container>
    </HeaderWrapper>
  );
}
