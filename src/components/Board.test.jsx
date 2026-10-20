import { afterEach, describe, expect, test } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";

afterEach(cleanup);

describe("Kanban board", () => {
  test("renders all columns in the supplied order with every task", () => {
    const { container } = render(<Main />);
    const columnTitles = Array.from(
      container.querySelectorAll(".column__title p"),
    ).map((title) => title.textContent);

    expect(columnTitles).toEqual([
      "Без статуса",
      "Нужно сделать",
      "В работе",
      "Тестирование",
      "Готово",
    ]);
    expect(screen.getAllByText("Название задачи")).toHaveLength(11);
    expect(screen.getAllByText("30.10.23")).toHaveLength(11);
  });

  test("renders both logos and the header controls", () => {
    render(<Header />);

    expect(screen.getByAltText("Логотип Skypro").getAttribute("src")).toBe(
      "/images/logo.png",
    );
    expect(
      screen.getByAltText("Логотип Skypro для тёмной темы").getAttribute("src"),
    ).toBe("/images/logo_dark.png");
    expect(
      screen.getByRole("link", { name: "Создать новую задачу" }),
    ).toBeTruthy();
    expect(screen.getByRole("link", { name: "Ivan Ivanov" })).toBeTruthy();
    expect(screen.getByText("ivan.ivanov@gmail.com")).toBeTruthy();
  });
});
