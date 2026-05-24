import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ProjectCard from "./ProjectCard";

describe("ProjectCard Component", () => {
  const projectProps = {
    title: "Holiday Extras Booking Engine",
    description: "Overhauled the core booking flow.",
    image: "https://example.com/image.jpg",
    tags: ["React", "Next.js"],
    labels: ["COMMERCIAL", "LEAD FRONTEND"],
    caseStudyUrl: "#case-study",
  };

  it("renders a featured project card with correct layout and labels", () => {
    render(<ProjectCard {...projectProps} featured={true} />);

    expect(screen.getByText("Holiday Extras Booking Engine")).toBeInTheDocument();
    expect(screen.getByText("Overhauled the core booking flow.")).toBeInTheDocument();
    expect(screen.getByAltText("Holiday Extras Booking Engine")).toHaveAttribute("src", "https://example.com/image.jpg");
    expect(screen.getByText("COMMERCIAL")).toBeInTheDocument();
    expect(screen.getByText("LEAD FRONTEND")).toBeInTheDocument();
    expect(screen.getByText("#React")).toBeInTheDocument();
    expect(screen.getByText("#Next.js")).toBeInTheDocument();
    expect(screen.getByText("Case Study")).toHaveAttribute("href", "#case-study");
  });

  it("renders a standard project card without case study link or labels", () => {
    render(<ProjectCard {...projectProps} featured={false} />);

    expect(screen.getByText("Holiday Extras Booking Engine")).toBeInTheDocument();
    expect(screen.getByText("Overhauled the core booking flow.")).toBeInTheDocument();
    expect(screen.queryByText("COMMERCIAL")).not.toBeInTheDocument();
    expect(screen.queryByText("Case Study")).not.toBeInTheDocument();
  });
});
