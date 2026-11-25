import { afterEach, describe, expect, test } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App.jsx";

afterEach(cleanup);

function renderAt(path) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
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
});
