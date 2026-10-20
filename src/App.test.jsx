import { afterEach, expect, test, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import App from "./App.jsx";

afterEach(cleanup);

test("renders the complete homework page without React warnings", () => {
  const consoleError = vi.spyOn(console, "error").mockImplementation(() => {});

  try {
    const { container } = render(<App />);

    expect(container.querySelector(".wrapper")).toBeTruthy();
    expect(container.querySelector("header.header")).toBeTruthy();
    expect(container.querySelectorAll(".main__column")).toHaveLength(5);
    expect(container.querySelector("#popExit")).toBeTruthy();
    expect(container.querySelector("#popNewCard")).toBeTruthy();
    expect(container.querySelector("#popBrowse")).toBeTruthy();
    expect(screen.getByAltText("Логотип Skypro").getAttribute("src")).toBe(
      "/images/logo.png",
    );
    expect(screen.getAllByText("Без статуса")).toHaveLength(2);
    expect(
      screen.getByRole("heading", { name: "Создание задачи", hidden: true }),
    ).toBeTruthy();
    expect(consoleError).not.toHaveBeenCalled();
  } finally {
    consoleError.mockRestore();
  }
});

test("keeps popup buttons visually equivalent after JSX cleanup", () => {
  render(<App />);

  const confirmExit = screen.getByRole("button", { name: "Да, выйти", hidden: true });
  const cancelExit = screen.getByRole("button", {
    name: "Нет, остаться",
    hidden: true,
  });
  const previousMonthButtons = screen.getAllByRole("button", {
    name: "Предыдущий месяц",
    hidden: true,
  });

  expect(getComputedStyle(confirmExit).color).toBe("rgb(255, 255, 255)");
  expect(getComputedStyle(cancelExit).color).toBe("rgb(86, 94, 239)");
  previousMonthButtons.forEach((button) => {
    expect(getComputedStyle(button).borderTopWidth).toBe("0px");
    expect(getComputedStyle(button).backgroundColor).toBe("rgba(0, 0, 0, 0)");
  });
});
