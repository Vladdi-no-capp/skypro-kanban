import {
  ErrorCode,
  HomeLink,
  NotFoundMain,
  NotFoundTitle,
} from "./NotFoundPage.styled.js";

export default function NotFoundPage() {
  return (
    <NotFoundMain>
      <ErrorCode>404</ErrorCode>
      <NotFoundTitle>Страница не найдена</NotFoundTitle>
      <p>Проверьте адрес или вернитесь к доске задач.</p>
      <HomeLink to="/">На главную</HomeLink>
    </NotFoundMain>
  );
}
