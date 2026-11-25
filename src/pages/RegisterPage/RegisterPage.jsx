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

export default function RegisterPage({ onLogin }) {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin();
    navigate("/", { replace: true });
  };

  return (
    <AuthPage>
      <AuthCard>
        <AuthTitle>Регистрация</AuthTitle>
        <AuthForm onSubmit={handleSubmit}>
          <Field>
            Имя
            <Input type="text" name="name" autoComplete="name" required />
          </Field>
          <Field>
            Электронная почта
            <Input type="email" name="email" autoComplete="email" required />
          </Field>
          <Field>
            Пароль
            <Input type="password" name="password" autoComplete="new-password" required />
          </Field>
          <SubmitButton type="submit">Зарегистрироваться</SubmitButton>
        </AuthForm>
        <AuthHint>
          Уже есть аккаунт? <AuthLink to="/login">Войти</AuthLink>
        </AuthHint>
      </AuthCard>
    </AuthPage>
  );
}
import { useNavigate } from "react-router-dom";
