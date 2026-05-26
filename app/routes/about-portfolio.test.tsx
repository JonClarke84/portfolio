import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, it, expect } from "vitest";
import AboutPortfolio from "./about-portfolio";

describe("AboutPortfolio Route Page", () => {
  it("renders the details on how the portfolio was built", () => {
    render(
      <MemoryRouter initialEntries={["/about-portfolio"]}>
        <AboutPortfolio />
      </MemoryRouter>
    );

    // Assert main heading is present
    expect(
      screen.getByRole("heading", { name: /How this Portfolio was Made/i })
    ).toBeInTheDocument();

    // Assert key mentions are present
    expect(screen.getAllByText(/Google Stitch/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Antigravity/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/React Router 7/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/TDD/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Kamal/i)[0]).toBeInTheDocument();
    expect(screen.getByText(/Back to Engineering/i)).toBeInTheDocument();

    // Assert TDD phases render
    expect(screen.getByRole("heading", { name: /Red Phase/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Green Phase/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Refactor/i })).toBeInTheDocument();

    // Assert Kamal deploy details are shown (multiple occurrences are expected)
    expect(screen.getAllByText(/xx\.xxx\.xx\.xxx/)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/portfolio.jonathanclarke.dev/)[0]).toBeInTheDocument();
  });
});
