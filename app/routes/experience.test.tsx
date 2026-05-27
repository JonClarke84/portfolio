import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, it, expect } from "vitest";
import Experience from "./experience";

describe("Experience Route Page", () => {
  it("renders the experience title, timeline and details", () => {
    render(
      <MemoryRouter initialEntries={["/experience"]}>
        <Experience />
      </MemoryRouter>
    );

    // Header Title
    expect(
      screen.getByRole("heading", { name: /Professional Journey/i })
    ).toBeInTheDocument();

    // Timeline Experience Items
    expect(screen.getByText("Senior Software Engineer")).toBeInTheDocument();
    expect(screen.getByText("Software Engineer II")).toBeInTheDocument();
    expect(screen.getByText("Apprentice Software Engineer")).toBeInTheDocument();
    expect(screen.getByText("Multimedia Lead")).toBeInTheDocument();
    expect(screen.getByText("Multimedia Editor")).toBeInTheDocument();
    expect(screen.getAllByText("Holiday Extras")[0]).toBeInTheDocument();
  });
});
