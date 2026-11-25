import {
  LogoutButton,
  PopUserWrapper,
  ThemeCheckbox,
  ThemeRow,
  ThemeText,
  UserMail,
  UserName,
} from "./PopUser.styled.js";

export default function PopUser() {
  return (
  <PopUserWrapper id="user-set-target">
  <UserName>Ivan Ivanov</UserName>
  <UserMail>ivan.ivanov@gmail.com</UserMail>

  <ThemeRow>
    <ThemeText>Темная тема</ThemeText>
    <ThemeCheckbox
      type="checkbox"
      name="checkbox"
      aria-label="Включить тёмную тему"
    />
  </ThemeRow>

  <LogoutButton to="/exit">
    Выйти
  </LogoutButton>
</PopUserWrapper>
  );
}
