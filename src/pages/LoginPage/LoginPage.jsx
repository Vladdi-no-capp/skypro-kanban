import {
  AuthCard,
  AuthForm,
  AuthHint,
  AuthLink,
  AuthPage,
  AuthTitle,
  Field,
  Input,
  SubmitButton,
} from "../AuthPages.styled.js";

export default function LoginPage({ onLogin }) {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin();
    navigate("/", { replace: true });
  };

  return (
    <AuthPage>
      <AuthCard>
        <AuthTitle>Вход</AuthTitle>
        <AuthForm onSubmit={handleSubmit}>
          <Field>
            Электронная почта
            <Input type="email" name="email" autoComplete="email" required />
          </Field>
          <Field>
            Пароль
            <Input type="password" name="password" autoComplete="current-password" required />
          </Field>
          <SubmitButton type="submit">Войти</SubmitButton>
        </AuthForm>
        <AuthHint>
          Нет аккаунта? <AuthLink to="/register">Зарегистрироваться</AuthLink>
        </AuthHint>
      </AuthCard>
    </AuthPage>
  );
}
import { useNavigate } from "react-router-dom";
