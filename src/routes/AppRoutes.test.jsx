import { afterEach, describe, expect, test } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
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

function submitLogin() {
  fireEvent.change(screen.getByLabelText("Электронная почта"), {
    target: { value: "ivan@example.com" },
  });
  fireEvent.change(screen.getByLabelText("Пароль"), {
    target: { value: "password" },
  });
  fireEvent.submit(screen.getByRole("button", { name: "Войти" }).closest("form"));
}

function submitRegistration() {
  fireEvent.change(screen.getByLabelText("Имя"), {
    target: { value: "Ivan" },
  });
  fireEvent.change(screen.getByLabelText("Электронная почта"), {
    target: { value: "ivan@example.com" },
  });
  fireEvent.change(screen.getByLabelText("Пароль"), {
    target: { value: "password" },
  });
  fireEvent.submit(
    screen.getByRole("button", { name: "Зарегистрироваться" }).closest("form"),
  );
}

function CardRouteDriver() {
  const navigate = useNavigate();

  return (
    <button type="button" onClick={() => navigate("/card/2")}>
      Открыть карточку 2
    </button>
  );
}

describe("application routes", () => {
  test.each(["/", "/exit", "/card/42", "/new-card"])(
    "redirects a signed-out visitor from protected route %s to login",
    (path) => {
      renderAt(path);

      expect(
        screen.getByRole("heading", { name: "Вход" }),
      ).toBeTruthy();
    },
  );

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

  test("unlocks the board after login through the form", () => {
    renderAt("/login");

    submitLogin();

    expect(screen.getByRole("navigation", { name: "Основная навигация" })).toBeTruthy();
  });

  test("unlocks the board after registration through the form", () => {
    renderAt("/register");

    submitRegistration();

    expect(screen.getByRole("navigation", { name: "Основная навигация" })).toBeTruthy();
  });

  test("opens the new-task route from the board without a reload", () => {
    renderRoutesAt("/", { isAuth: true });

    fireEvent.click(screen.getByRole("link", { name: "Создать новую задачу" }));

    expect(screen.getByRole("heading", { name: "Создание задачи" })).toBeTruthy();
  });

  test("opens a card route from the board without a reload", () => {
    renderRoutesAt("/", { isAuth: true });

    fireEvent.click(screen.getAllByRole("link", { name: /Открыть/ })[0]);

    expect(screen.getByRole("heading", { name: "Просмотр задачи" })).toBeTruthy();
  });

  test("keeps access when exit is cancelled", () => {
    renderAt("/login");
    submitLogin();
    fireEvent.click(screen.getByRole("button", { name: "Ivan Ivanov" }));
    fireEvent.click(screen.getByRole("link", { name: "Выйти" }));

    fireEvent.click(screen.getByRole("button", { name: "Нет, остаться" }));

    expect(screen.getByRole("navigation", { name: "Основная навигация" })).toBeTruthy();
  });

  test("revokes protected access when exit is confirmed", () => {
    renderAt("/login");
    submitLogin();
    fireEvent.click(screen.getByRole("button", { name: "Ivan Ivanov" }));
    fireEvent.click(screen.getByRole("link", { name: "Выйти" }));

    fireEvent.click(screen.getByRole("button", { name: "Да, выйти" }));

    expect(screen.getByRole("heading", { name: "Вход" })).toBeTruthy();
  });

  test("updates the displayed card id on every route transition", () => {
    render(
      <MemoryRouter initialEntries={["/card/1"]}>
        <CardRouteDriver />
        <AppRoutes isAuth onLogin={() => {}} onLogout={() => {}} />
      </MemoryRouter>,
    );

    expect(screen.getByText("ID задачи: 1")).toBeTruthy();

    fireEvent.click(screen.getByRole("button", { name: "Открыть карточку 2" }));

    expect(screen.getByText("ID задачи: 2")).toBeTruthy();
  });
});
