import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, it, expect } from "vitest";
import Video from "./video";

describe("Video Route Page", () => {
  it("renders the video portfolio page elements", () => {
    render(
      <MemoryRouter initialEntries={["/video"]}>
        <Video />
      </MemoryRouter>
    );

    // Hero Section
    expect(
      screen.getByRole("heading", { name: /Video Production &.*Strategic Leadership/ })
    ).toBeInTheDocument();

    expect(screen.getByText("Back to Engineering")).toBeInTheDocument();

    // Strategic Impact Card
    expect(screen.getByText("Strategic Impact")).toBeInTheDocument();
    expect(screen.getByText("Founded internal unit from scratch")).toBeInTheDocument();
    expect(screen.getByText("Legoland Windsor Freelance Producer (2020)")).toBeInTheDocument();

    // Featured Videos
    expect(screen.getByText("The Ultimate Guide to Airport Parking")).toBeInTheDocument();
    expect(screen.getByText("How to Save Money on Your Next Holiday")).toBeInTheDocument();

    // Visual Storytelling
    expect(screen.getByText("Visual Storytelling")).toBeInTheDocument();
  });
});
