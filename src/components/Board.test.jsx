import { afterEach, describe, expect, test } from "vitest";
import { cleanup, fireEvent, render, screen,  } from "@testing-library/react";
import { cardList } from "../../data.js";
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
    expect(container.querySelectorAll(".cards__item")).toHaveLength(
  cardList.length,
);

cardList.forEach((card) => {
  expect(screen.getByText(card.title)).toBeTruthy();
});
  });

  test("renders both logos and the header controls", () => {
    render(<Header />);

    const userLink = screen.getByRole("link", { name: "Ivan Ivanov" });

expect(screen.queryByText("ivan.ivanov@gmail.com")).toBeNull();

fireEvent.click(userLink);
expect(screen.getByText("ivan.ivanov@gmail.com")).toBeTruthy();

fireEvent.click(userLink);
expect(screen.queryByText("ivan.ivanov@gmail.com")).toBeNull();

  });
});
