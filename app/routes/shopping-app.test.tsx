import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, it, expect } from "vitest";
import ShoppingApp from "./shopping-app";

describe("ShoppingApp Route Page", () => {
  it("renders the Family Shopping App case study page with features and stack info", () => {
    render(
      <MemoryRouter initialEntries={["/shopping-app"]}>
        <ShoppingApp />
      </MemoryRouter>
    );

    // Assert main heading is present
    expect(
      screen.getByRole("heading", { name: /^Family Shopping App$/i, level: 1 })
    ).toBeInTheDocument();

    // Assert subtitles or sections are present
    expect(screen.getByRole("heading", { name: /Designed For Family Context/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Architecture & Algorithm/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Decimal\/Fractional Ordering Algorithm/i })).toBeInTheDocument();

    // Assert key features
    expect(screen.getByText("Mobile-Only Design")).toBeInTheDocument();
    expect(screen.getByText("Family Meal Planner")).toBeInTheDocument();
    expect(screen.getByText("Multi-Tenant Family Groups")).toBeInTheDocument();

    // Assert tech badges
    expect(screen.getByText("Ruby 3.3")).toBeInTheDocument();
    expect(screen.getByText("Rails 8.1")).toBeInTheDocument();
    expect(screen.getByText("SQLite3")).toBeInTheDocument();
    expect(screen.getByText("Hotwire (Turbo/Stimulus)")).toBeInTheDocument();

    // Assert live link is present
    const link = screen.getByRole("link", { name: /Visit Family Shopping App live site/i });
    expect(link).toHaveAttribute("href", "https://www.jonathanclarke.dev/shopping");
    const image = screen.getByAltText(/Family Shopping App mobile view preview/i);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/shopping_list.png");
  });
});
