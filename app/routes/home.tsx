import type { Route } from "./+types/home";
import NavBar from "../components/NavBar";
import ProjectCard from "../components/ProjectCard";
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
    image: "/holiday_extras.png",
    tags: ["TypeScript", "React", "Remix", "Node.js"],
    labels: ["COMMERCIAL", "SENIOR FRONTEND"],
    caseStudyUrl: "/holiday-extras",
  },
  secondary: [
    {
      title: "HobbyLog",
      description:
        "A backlog tracker designed as a Kanban board (Trello-style) for tabletop miniature painters, actively used by members of the local Warhammer community. Features sub-second drag-and-drop, collection metrics, Clerk authentication, and a full-stack monorepo layout.",
      image: "/hobby_log.png",
      tags: ["React 19", "React Router 7", "Hono", "PostgreSQL", "Drizzle ORM", "Clerk", "Turborepo"],
      caseStudyUrl: "/hobbylog",
    },
    {
      title: "Family Shopping App",
      description:
        "A mobile-only Rails 8.1 and Hotwire application designed for family meal planning and weekly shopping coordination. Features multi-tenancy group isolation and a fractional decimal ordering algorithm that learns your supermarket layout to automatically sequence future grocery checklists.",
      image: "/shopping_list.png",
      tags: ["Ruby on Rails 8.1", "SQLite3", "Hotwire", "Turbo", "Stimulus", "bcrypt"],
      caseStudyUrl: "/shopping-app",
    },
  ],
};


export default function Home() {
  const focusRingClass = "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none rounded-lg";
  const inlineFocusRingClass = "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none rounded";

  return (
    <>
      <NavBar />
      <main className="pt-24 pb-section-gap">
        {/* Hero Section */}
        <section 
          className="max-w-container-max mx-auto px-gutter mb-section-gap pt-16 relative"
          aria-label="Introduction"
        >
          {/* Subtle ambient glows for visual depth */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" aria-hidden="true"></div>
          <div className="absolute top-12 left-1/4 w-80 h-80 bg-primary-container/5 rounded-full blur-3xl -z-10 pointer-events-none" aria-hidden="true"></div>

          <div className="animate-fade-in-up">
            <p className="font-label-sm text-label-sm text-primary mb-stack-md flex items-center gap-2">
              <span className="w-8 h-[1px] bg-primary" aria-hidden="true"></span> SENIOR FRONTEND ENGINEER
            </p>
            <h1 className="font-display-xl text-display-xl mb-stack-lg leading-none tracking-tight">
              Crafting <span className="bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent">High-Performance</span> User Interfaces.
            </h1>
            <p className="font-body-lg text-body-lg text-secondary mb-stack-lg max-w-3xl leading-relaxed">
              I build resilient, scalable front-end systems with technical precision. Specialized in React architectures, performance optimization, and premium user experiences.
            </p>
            <div className="flex flex-wrap gap-stack-md">
              <a
                className={`bg-primary-container text-on-primary-container px-8 py-4 rounded-lg font-button text-button flex items-center gap-2 hover:opacity-95 hover:scale-[1.02] active:scale-98 transition-all duration-300 ${focusRingClass}`}
                href="#work"
              >
                View Portfolio{" "}
                <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                  arrow_downward
                </span>
              </a>
              <a
                className={`bg-inverse-surface text-inverse-on-surface px-8 py-4 rounded-lg font-button text-button hover:opacity-90 hover:scale-[1.02] active:scale-98 transition-all duration-300 ${focusRingClass}`}
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
                href="https://www.linkedin.com/in/jonathanclarkedev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Message on LinkedIn{" "}
                <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                  chat
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
