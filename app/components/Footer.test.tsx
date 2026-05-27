import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, it, expect } from "vitest";
import Footer from "./Footer";

describe("Footer Component", () => {
  it("renders with default precision text", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    expect(screen.getByText(/jonathanclarke\.dev/i)).toBeInTheDocument();
    expect(screen.getByText(/© 2024 Jonathan Clarke/i)).toBeInTheDocument();
    expect(screen.getByText(/technical precision/i)).toBeInTheDocument();
    expect(screen.getByText(/GitHub/i)).toBeInTheDocument();
    expect(screen.getByText(/LinkedIn/i)).toBeInTheDocument();
  });

  it("renders with custom precision text", () => {
    render(
      <MemoryRouter>
        <Footer precisionText="agentic precision" />
      </MemoryRouter>
    );

    expect(screen.getByText(/agentic precision/i)).toBeInTheDocument();
    expect(screen.queryByText(/technical precision/i)).not.toBeInTheDocument();
  });
});
