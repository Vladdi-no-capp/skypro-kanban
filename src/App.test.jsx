import { afterEach, expect, test, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App.jsx";
import PopExit from "./components/PopExit/PopExit.jsx";
import PopNewCard from "./components/PopNewCard/PopNewCard.jsx";

afterEach(cleanup);

test("renders the routed application without React warnings", () => {
  const consoleError = vi.spyOn(console, "error").mockImplementation(() => {});

  try {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByTestId("app-wrapper")).toBeTruthy();
    expect(screen.getByRole("heading", { name: "Вход" })).toBeTruthy();
    expect(consoleError).not.toHaveBeenCalled();
  } finally {
    consoleError.mockRestore();
  }
});

test("keeps popup buttons visually equivalent after JSX cleanup", () => {
  render(
    <MemoryRouter>
      <PopExit />
      <PopNewCard />
    </MemoryRouter>,
  );

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
