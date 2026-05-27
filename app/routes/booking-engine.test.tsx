import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, it, expect } from "vitest";
import BookingEngine from "./booking-engine";

describe("BookingEngine Route Page", () => {
  it("renders the holidayextras.com case study page with CV achievements", () => {
    render(
      <MemoryRouter initialEntries={["/booking-engine"]}>
        <BookingEngine />
      </MemoryRouter>
    );

    // Assert main heading is present
    expect(
      screen.getByRole("heading", { name: /Engineering at holidayextras.com/i })
    ).toBeInTheDocument();

    // Assert key career milestones are present
    expect(screen.getByRole("heading", { name: "Senior Software Engineer" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Software Engineer II" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Apprentice Software Engineer" })).toBeInTheDocument();

    // Assert specific achievements from user prompt/CV
    expect(screen.getAllByText(/Claude Code/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Trips/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/50%/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/30%/i)[0]).toBeInTheDocument();
  });
});
