import type { Route } from "./+types/experience";
import NavBar from "../components/NavBar";
import Timeline from "../components/Timeline";
import Footer from "../components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Professional Journey | Jonathan Clarke" },
    {
      name: "description",
      content:
        "Professional timeline and career accomplishments of Jonathan Clarke, Senior Frontend Engineer.",
    },
  ];
}

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "Holiday Extras",
    period: "Apr 2026 — PRESENT",
    isCurrent: true,
    bullets: [
      "Pioneered Claude Code adoption across the business.",
      "Developing AI-first workflows to migrate a legacy monolith frontend to a modern framework.",
      "Built and maintain an AI skills marketplace for use across the engineering team.",
      "Contributed to a platform to enable AI innovation for non-technical staff.",
      "Built the frontend for our AI chat/tools for end users.",
      "Build a markdown-to-react pipeline to enable rapid product innovation.",
    ],
  },
  {
    role: "Software Engineer II",
    company: "Holiday Extras",
    period: "Oct 2023 — Mar 2026",
    isCurrent: false,
    bullets: [
      "Leading feature development and collaborating across teams for impactful improvements.",
      "Worked on Trips - helping increase items booked per trip and increasing trip search completion by 30%.",
      "Improved trip-creation form session-to-search rates by over 50%.",
      "Pair programming and mentoring engineers while implementing new products in Trips API (GraphQL).",
    ],
  },
  {
    role: "Apprentice Software Engineer",
    company: "Holiday Extras",
    period: "Feb 2022 — Jul 2023",
    isCurrent: false,
    bullets: [
      "Completed Makers Academy apprenticeship in Ruby, Javascript, and web development.",
      "Achieved Distinction in software engineering apprenticeship.",
    ],
  },
  {
    role: "Multimedia Lead",
    company: "Holiday Extras",
    period: "Apr 2015 — Feb 2022",
    isCurrent: false,
    bullets: [
      "Managed a team of 11 for all video/photo production, overseeing line management, recruitment, budgeting, and content strategy.",
      "Launched a top-performing YouTube channel and grew organic Facebook audiences with video content.",
      "Produced multiple videos achieving over 1 million organic views and #1 search ranks for key travel terms.",
      "Led international shoots across four continents, utilizing a CAA drone license for aerial filming.",
    ],
  },
  {
    role: "Multimedia Editor",
    company: "Holiday Extras",
    period: "Oct 2011 — Apr 2015",
    isCurrent: false,
    bullets: [
      "Founded and scaled the in-house video and photography production team, including mentoring and recruitment.",
    ],
  },
];

export default function Experience() {
  return (
    <>
      <NavBar />
      <main className="pt-24 pb-section-gap">
        <section
          className="max-w-container-max mx-auto px-gutter mb-section-gap pt-16 relative"
          aria-labelledby="experience-title"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" aria-hidden="true"></div>

          <div className="max-w-3xl mx-auto animate-fade-in-up">
            <header className="mb-12">
              <h1 id="experience-title" className="font-display-xl text-display-xl mb-4 leading-none tracking-tight">
                Professional <span className="bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent">Journey</span>
              </h1>
              <p className="text-secondary font-body-lg max-w-xl">
                A career defined by leadership, frontend architecture, and technical evolution.
              </p>
            </header>
            <Timeline items={experiences} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
