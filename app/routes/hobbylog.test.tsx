import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, it, expect } from "vitest";
import HobbyLog from "./hobbylog";

describe("HobbyLog Route Page", () => {
  it("renders the HobbyLog case study page with features and stack info", () => {
    render(
      <MemoryRouter initialEntries={["/hobbylog"]}>
        <HobbyLog />
      </MemoryRouter>
    );

    // Assert main heading is present
    expect(
      screen.getByRole("heading", { name: /^HobbyLog$/i, level: 1 })
    ).toBeInTheDocument();

    // Assert subtitles or sections are present
    expect(screen.getByRole("heading", { name: /Board & Pipeline UX/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Monorepo Architecture/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Gemini AI Assistant Integration/i })).toBeInTheDocument();

    // Assert specific technology badges / items
    expect(screen.getByText("React 19")).toBeInTheDocument();
    expect(screen.getByText("Hono (Node.js)")).toBeInTheDocument();
    expect(screen.getByText("PostgreSQL")).toBeInTheDocument();
    expect(screen.getByText("Drizzle ORM")).toBeInTheDocument();
    expect(screen.getByText("Clerk Auth")).toBeInTheDocument();
    expect(screen.getByText("Turborepo & pnpm")).toBeInTheDocument();

    // Assert live link is present
    const link = screen.getByRole("link", { name: /Visit HobbyLog live site/i });
    expect(link).toHaveAttribute("href", "https://hobbylog.jonathanclarke.dev");
    const img = screen.getByAltText(/HobbyLog web application preview/i);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "/hobby_log.png");
  });
});
