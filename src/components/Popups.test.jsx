import { afterEach, describe, expect, test } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import PopBrowse from "./PopBrowse/PopBrowse.jsx";
import PopExit from "./PopExit/PopExit.jsx";
import PopNewCard from "./PopNewCard/PopNewCard.jsx";

afterEach(cleanup);

describe("Kanban popups", () => {
  test("renders supplied popup copy and two reusable calendars", () => {
    const { container } = render(
      <>
        <PopNewCard />
        <PopBrowse />
        <PopExit />
      </>,
    );

    expect(screen.getByRole("heading", { name: "Создание задачи" })).toBeTruthy();
    expect(screen.getByRole("heading", { name: "Название задачи" })).toBeTruthy();
    expect(screen.getByRole("heading", { name: "Выйти из аккаунта?" })).toBeTruthy();
    expect(screen.getAllByText("Сентябрь 2023")).toHaveLength(2);
    expect(container.querySelectorAll(".calendar")).toHaveLength(2);
  });

  test("connects form labels and uses React boolean properties", () => {
    const { container } = render(
      <>
        <PopNewCard />
        <PopBrowse />
      </>,
    );

    const titleInput = screen.getByLabelText("Название задачи");
    const browseTextArea = container.querySelector("#textArea01");

    expect(titleInput.id).toBe("formTitle");
    expect(document.activeElement).toBe(titleInput);
    expect(browseTextArea.readOnly).toBe(true);
    expect(container.querySelector("#new-card-date")).toBeTruthy();
    expect(container.querySelector("#browse-date")).toBeTruthy();
  });
});
