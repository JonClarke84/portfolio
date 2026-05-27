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
    expect(screen.getByText("Strategic Impact & Leadership")).toBeInTheDocument();
    expect(screen.getByText("Founded internal unit from scratch")).toBeInTheDocument();
    expect(screen.getByText("CAA-licensed professional drone pilot")).toBeInTheDocument();
    expect(screen.getByText("Legoland Windsor Freelance Producer (2020)")).toBeInTheDocument();

    // Featured Videos with new metadata
    expect(screen.getByText("Tokyo Travel Guide | Travel better in JAPAN!")).toBeInTheDocument();
    expect(screen.getByText("48 Hours in Budapest | ULTIMATE BUDAPEST TRAVEL GUIDE")).toBeInTheDocument();
    expect(screen.getByText("The most BEAUTIFUL country on Earth? | THAILAND cinematic travel")).toBeInTheDocument();
  });
});
