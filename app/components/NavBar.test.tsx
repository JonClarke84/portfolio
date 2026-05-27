import { render, screen } from "@testing-library/react";
import { MemoryRouter, useLocation } from "react-router";
import { describe, it, expect, vi } from "vitest";
import NavBar from "./NavBar";

describe("NavBar Component", () => {
  it("renders brand logo and all navigation links", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <NavBar />
      </MemoryRouter>
    );

    expect(screen.getByText("jonathanclarke.dev")).toBeInTheDocument();
    expect(screen.getByText("Work")).toBeInTheDocument();
    expect(screen.getByText("Experience")).toBeInTheDocument();
    expect(screen.getByText("Video Production")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("highlights Video Production link as active on /video page", () => {
    render(
      <MemoryRouter initialEntries={["/video"]}>
        <NavBar />
      </MemoryRouter>
    );

    const videoLink = screen.getByText("Video Production");
    expect(videoLink).toHaveClass("text-primary");
    expect(videoLink).toHaveAttribute("href", "#");
  });

  it("links Work to section anchor on home page", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <NavBar />
      </MemoryRouter>
    );

    const workLink = screen.getByText("Work");
    expect(workLink).toHaveAttribute("href", "#work");
  });

  it("links Work to home page anchor on video page", () => {
    render(
      <MemoryRouter initialEntries={["/video"]}>
        <NavBar />
      </MemoryRouter>
    );

    const workLink = screen.getByText("Work");
    expect(workLink).toHaveAttribute("href", "/#work");
  });

  it("highlights Experience link as active on /experience page", () => {
    render(
      <MemoryRouter initialEntries={["/experience"]}>
        <NavBar />
      </MemoryRouter>
    );

    const experienceLink = screen.getByText("Experience");
    expect(experienceLink).toHaveClass("text-primary");
    expect(experienceLink).toHaveAttribute("href", "#");
  });
});
