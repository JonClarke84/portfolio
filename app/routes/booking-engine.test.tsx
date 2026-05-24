import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, it, expect } from "vitest";
import BookingEngine from "./booking-engine";

describe("BookingEngine Route Page", () => {
  it("renders the booking engine agent rebuild case study page", () => {
    render(
      <MemoryRouter initialEntries={["/booking-engine"]}>
        <BookingEngine />
      </MemoryRouter>
    );

    // Assert main heading is present
    expect(
      screen.getByRole("heading", { name: /Rebuilding the Holiday Extras Booking Engine/i })
    ).toBeInTheDocument();

    // Assert agent mentions are present
    expect(screen.getByText(/AI Agents/i)).toBeInTheDocument();
    expect(screen.getByText(/Back to Engineering/i)).toBeInTheDocument();
  });
});
