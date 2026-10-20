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
    expect(screen.getByRole("heading", { name: "Создание задачи" })).toBeTruthy();
    expect(consoleError).not.toHaveBeenCalled();
  } finally {
    consoleError.mockRestore();
  }
});
