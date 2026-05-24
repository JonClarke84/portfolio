import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Timeline from "./Timeline";

describe("Timeline Component", () => {
  const experiences = [
    {
      role: "Senior Frontend Software Engineer",
      company: "Holiday Extras",
      period: "2021 — PRESENT",
      isCurrent: true,
      bullets: [
        "Leading the development of performant platforms.",
        "Driving AI innovation.",
      ],
    },
    {
      role: "Founder & Lead",
      company: "Holiday Extras Video Unit",
      period: "PREVIOUSLY",
      isCurrent: false,
      description: "Spearheaded an internal transition to found video unit.",
    },
  ];

  it("renders timeline items with correct text, bullets, and description", () => {
    render(<Timeline items={experiences} />);

    expect(screen.getByText("Senior Frontend Software Engineer")).toBeInTheDocument();
    expect(screen.getByText("Holiday Extras")).toBeInTheDocument();
    expect(screen.getByText("2021 — PRESENT")).toBeInTheDocument();
    expect(screen.getByText("Leading the development of performant platforms.")).toBeInTheDocument();

    expect(screen.getByText("Founder & Lead")).toBeInTheDocument();
    expect(screen.getByText("Holiday Extras Video Unit")).toBeInTheDocument();
    expect(screen.getByText("PREVIOUSLY")).toBeInTheDocument();
    expect(screen.getByText("Spearheaded an internal transition to found video unit.")).toBeInTheDocument();
  });

  it("assigns primary background color to current jobs, and outline-variant to previous", () => {
    const { container } = render(<Timeline items={experiences} />);
    const dots = container.querySelectorAll(".absolute");

    expect(dots[0]).toHaveClass("bg-primary");
    expect(dots[1]).toHaveClass("bg-outline-variant");
  });
});
