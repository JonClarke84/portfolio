import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, it, expect } from "vitest";
import Home from "./home";

describe("Home Route Page", () => {
  it("renders the hero title, projects, skills, timeline, and contact section", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Home />
      </MemoryRouter>
    );

    // Hero Section
    expect(
      screen.getByRole("heading", { name: /Crafting High-Performance User Interfaces/ })
    ).toBeInTheDocument();

    // Featured Project Card
    expect(screen.getByText("holidayextras.com")).toBeInTheDocument();

    // Secondary Project Cards
    expect(screen.getByText("HobbyLog")).toBeInTheDocument();
    expect(screen.getByText("Family Shopping App")).toBeInTheDocument();

    // Technical Arsenal
    expect(screen.getByText("Technical Arsenal")).toBeInTheDocument();
    expect(screen.getByText("Frontend Architecture")).toBeInTheDocument();
    expect(screen.getByText("AI & Automation")).toBeInTheDocument();

    // Contact Section
    expect(screen.getByText("Looking for a Senior Frontend Engineer?")).toBeInTheDocument();
  });
});
