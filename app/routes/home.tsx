import type { Route } from "./+types/home";
import NavBar from "../components/NavBar";
import ProjectCard from "../components/ProjectCard";
import Timeline from "../components/Timeline";
import Footer from "../components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Jonathan Clarke | Senior Frontend Engineer" },
    {
      name: "description",
      content:
        "Resilient, scalable front-end systems built with technical precision. Specialized in React architectures, performance optimization, and premium user experiences.",
    },
  ];
}

const projects = {
  featured: {
    title: "holidayextras.com",
    description:
      "Pioneered Claude Code adoption across the business, migrated monolithic codebases to React/Remix, and drove key conversion improvements on Trips, increasing search completion by 30%.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuArvjj7lneDfHOptyljEvGiTNfAMBbQICSYdy5GmZnrVPGuPvG0IPz4uN-VTJ2CYCLCzpc5l6RyK_JZPp36szc_6l5WpjFrEIuK3jODivV6mJE_Ul5ekn6zPVyu-KebDryEvyf0dqfdOH_YdeUUK5-vyqwAB_9NZIB5zBsUDiBA5ZdsPJccLP1K390rdJHLzYRSv7U2zIIcjw_38W9l3iFVIW8vNJjLIhbUBsKgq0meQLhkk-x-JHseP8lNGw2yOO_zojB8fb4SkBI",
    tags: ["TypeScript", "React", "Remix", "Node.js"],
    labels: ["COMMERCIAL", "SENIOR FRONTEND"],
    caseStudyUrl: "/holiday-extras",
  },
  secondary: [
    {
      title: "HobbyLog Architecture",
      description:
        "A full-stack hobby tracking application built with a focus on complex data visualizations and sub-second interaction latency.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAdS5G6eKKMiO5822ZOubwYf9pUb-Yk67ZaNntxBjJoatWzSf1idN6ogMpMVUwCYFLpXrmxQWcaggxPx--VfEPAqBx3f3hDPQV8N1QDUDZasxpLP9m7hf4vvuRtBC495DSNze6qxvBtT5M1ZwCJpNRZNTKguOuhD9BzHvD2XO7RzlcBqu9fNBE_U40Eu59Yv4JFomPC4iiFAdMFtB0TQO9wMAdlTVsLV_n6eVIRaI9-9MGdQ82Go0eQOcCpFKCS7H1Agt-ruwuyUZQ",
      tags: ["TypeScript", "GraphQL", "PostgreSQL"],
    },
    {
      title: "Shopping App Pro",
      description:
        "A premium design-system-first e-commerce interface. Optimized for mobile-first interactions and complex filtering logic.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB2f8O5DrWCRgxF-d6WG68Q3oS7vHY80lgNjrXAko-pQ5uXnm9UNSeX19FlhpGOjOw_oiandJpfyMr5-su_1pIBEQaYFbLWNt2SNH_sviTm0BPaHac_4pVqtHsqXW3c-fQzEtQWZ8CkfhqAIJT5EgkXGih8N0ktd62XKkQx8nI84cV6OivCtXlDN_lVUGeKVLdFz4mArBwHziy5TbuXWpimw5Ae2AQ9e_TZEzzYIupZXYxvGWSCg6zcIAvJjcBhQr8ZtpNuG8D5aIE",
      tags: ["TailwindCSS", "FramerMotion", "Zustand"],
    },
  ],
};

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

export default function Home() {
  const focusRingClass = "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none rounded-lg";
  const inlineFocusRingClass = "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none rounded";

  return (
    <>
      <NavBar />
      <main className="pt-24 pb-section-gap">
        {/* Hero Section */}
        <section 
          className="max-w-container-max mx-auto px-gutter mb-section-gap pt-16"
          aria-label="Introduction"
        >
          <div className="max-w-3xl">
            <p className="font-label-sm text-label-sm text-primary mb-stack-md flex items-center gap-2">
              <span className="w-8 h-[1px] bg-primary" aria-hidden="true"></span> SENIOR FRONTEND ENGINEER
            </p>
            <h1 className="font-display-xl text-display-xl mb-stack-lg leading-none tracking-tight">
              Crafting <span className="text-primary">High-Performance</span> User Interfaces.
            </h1>
            <p className="font-body-lg text-body-lg text-secondary mb-stack-lg max-w-2xl">
              I build resilient, scalable front-end systems with technical precision. Specialized in React architectures, performance optimization, and premium user experiences.
            </p>
            <div className="flex flex-wrap gap-stack-md">
              <a
                className={`bg-primary-container text-on-primary-container px-8 py-4 rounded-lg font-button text-button flex items-center gap-2 hover:opacity-95 transition-all ${focusRingClass}`}
                href="#work"
              >
                View Portfolio{" "}
                <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                  arrow_downward
                </span>
              </a>
              <a
                className={`bg-inverse-surface text-inverse-on-surface px-8 py-4 rounded-lg font-button text-button hover:opacity-90 transition-all ${focusRingClass}`}
                href="#contact"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>

        {/* Selected Work Section */}
        <section
          className="max-w-container-max mx-auto px-gutter mb-section-gap scroll-mt-24"
          id="work"
          aria-labelledby="work-title"
        >
          <div className="flex justify-between items-end mb-stack-lg">
            <div>
              <h2 id="work-title" className="font-headline-lg text-headline-lg mb-2">
                Selected Projects
              </h2>
              <p className="text-secondary font-body-md">
                Commercial and personal engineering highlights.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Featured Card */}
            <div className="md:col-span-12 group">
              <ProjectCard {...projects.featured} featured={true} />
            </div>
            {/* Secondary Cards */}
            {projects.secondary.map((project, idx) => (
              <div key={idx} className="md:col-span-6 group">
                <ProjectCard {...project} featured={false} />
              </div>
            ))}
          </div>
        </section>

        {/* Technical Arsenal Section */}
        <section
          className="bg-surface-container-low py-section-gap scroll-mt-24"
          id="stack"
          aria-labelledby="stack-title"
        >
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="text-center mb-16">
              <h2 id="stack-title" className="font-headline-lg text-headline-lg mb-4">
                Technical Arsenal
              </h2>
              <p className="text-secondary max-w-xl mx-auto">
                Key expertise and specialized technical stacks.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              <div className="bg-surface-container-lowest p-8 border border-outline-variant/20 rounded-xl flex flex-col gap-4 hover:border-primary transition-colors cursor-default group">
                <span className="material-symbols-outlined text-4xl text-primary opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" aria-hidden="true">
                  architecture
                </span>
                <h3 className="font-headline-md text-headline-md text-xl">
                  Frontend Architecture
                </h3>
                <p className="text-body-md text-secondary">
                  React, Remix, TypeScript, Redux Toolkit, React Testing Library,
                  Vitest.
                </p>
              </div>
              <div className="bg-surface-container-lowest p-8 border border-outline-variant/20 rounded-xl flex flex-col gap-4 hover:border-primary transition-colors cursor-default group">
                <span className="material-symbols-outlined text-4xl text-primary opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" aria-hidden="true">
                  smart_toy
                </span>
                <h3 className="font-headline-md text-headline-md text-xl">
                  AI &amp; Automation
                </h3>
                <p className="text-body-md text-secondary">
                  Early adopter of AI assisted development. Leading
                  implementation of internal AI tools and plugins.
                </p>
              </div>
              <div className="bg-surface-container-lowest p-8 border border-outline-variant/20 rounded-xl flex flex-col gap-4 hover:border-primary transition-colors cursor-default group">
                <span className="material-symbols-outlined text-4xl text-primary opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" aria-hidden="true">
                  verified
                </span>
                <h3 className="font-headline-md text-headline-md text-xl">
                  Engineering Excellence
                </h3>
                <p className="text-body-md text-secondary">
                  Accessibility, Automated Testing, and building robust Design
                  Systems at scale.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section
          className="max-w-container-max mx-auto px-gutter my-section-gap scroll-mt-24"
          id="experience"
          aria-labelledby="experience-title"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <h2 id="experience-title" className="font-headline-lg text-headline-lg sticky top-24">
                Professional Journey
              </h2>
              <p className="text-secondary mt-4 font-body-md">
                A career defined by leadership and technical evolution.
              </p>
            </div>
            <div className="md:col-span-8">
              <Timeline items={experiences} />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          className="max-w-container-max mx-auto px-gutter mb-section-gap scroll-mt-24"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="bg-inverse-surface text-inverse-on-surface p-12 md:p-20 rounded-xl relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <h2 id="contact-title" className="font-display-xl text-headline-lg mb-6">
                Looking for a Senior Frontend Engineer?
              </h2>
              <p className="font-body-lg text-body-lg text-surface-variant/80 mb-10">
                I am currently open to full-time, permanent senior-level engineering
                opportunities. Let's discuss how my expertise in frontend architecture,
                design systems, and AI-driven workflows can help your team.
              </p>
              <a
                className={`bg-primary-container text-on-primary-container px-10 py-5 rounded-lg font-button text-headline-md flex items-center justify-center md:inline-flex gap-4 hover:scale-105 transition-transform ${focusRingClass}`}
                href="mailto:hello@jonathanclarke.dev"
              >
                Connect via Email{" "}
                <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                  alternate_email
                </span>
              </a>
            </div>
            {/* Abstract visual element */}
            <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none" aria-hidden="true">
              <div className="w-full h-full border-l border-t border-surface-variant transform rotate-12 translate-x-1/2 translate-y-1/4"></div>
              <div className="w-full h-full border-l border-t border-surface-variant transform rotate-45 translate-x-1/3"></div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
