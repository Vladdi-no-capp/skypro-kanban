import { afterEach, describe, expect, test } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App.jsx";
import AppRoutes from "./AppRoutes.jsx";

afterEach(cleanup);

function renderAt(path) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );
}

function renderRoutesAt(path, { isAuth = false, onLogin, onLogout } = {}) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <AppRoutes
        isAuth={isAuth}
        onLogin={onLogin ?? (() => {})}
        onLogout={onLogout ?? (() => {})}
      />
    </MemoryRouter>,
  );
}

describe("application routes", () => {
  test("redirects a signed-out visitor from the protected board to login", () => {
    renderAt("/");

    expect(
      screen.getByRole("heading", { name: "Вход" }),
    ).toBeTruthy();
  });

  test("renders a 404 page for an unknown address", () => {
    renderAt("/missing-page");

    expect(
      screen.getByRole("heading", { name: "Страница не найдена" }),
    ).toBeTruthy();
  });

  test("renders the login form on the public login route", () => {
    renderRoutesAt("/login");

    expect(screen.getByLabelText("Электронная почта")).toBeTruthy();
    expect(screen.getByLabelText("Пароль")).toBeTruthy();
    expect(screen.getByRole("button", { name: "Войти" })).toBeTruthy();
  });

  test("renders the registration form on the public registration route", () => {
    renderRoutesAt("/register");

    expect(
      screen.getByRole("heading", { name: "Регистрация" }),
    ).toBeTruthy();
    expect(screen.getByLabelText("Имя")).toBeTruthy();
    expect(screen.getByRole("button", { name: "Зарегистрироваться" })).toBeTruthy();
  });

  test("renders the board for an authenticated visitor", () => {
    const { container } = renderRoutesAt("/", { isAuth: true });

    expect(container.querySelector("header")).toBeTruthy();
    expect(container.querySelector("main")).toBeTruthy();
  });

  test("renders the protected new-task page", () => {
    renderRoutesAt("/new-card", { isAuth: true });

    expect(
      screen.getByRole("heading", { name: "Создание задачи" }),
    ).toBeTruthy();
  });

  test("renders the protected card page", () => {
    renderRoutesAt("/card/42", { isAuth: true });

    expect(
      screen.getByRole("heading", { name: "Просмотр задачи" }),
    ).toBeTruthy();
  });

  test("renders the protected exit page", () => {
    renderRoutesAt("/exit", { isAuth: true });

    expect(
      screen.getByRole("heading", { name: "Выйти из аккаунта?" }),
    ).toBeTruthy();
  });
});
