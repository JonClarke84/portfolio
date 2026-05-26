import type { Route } from "./+types/booking-engine";
import { Link } from "react-router";
import NavBar from "../components/NavBar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Rebuilding the Booking Engine | AI Agents Case Study" },
    {
      name: "description",
      content:
        "Case study on using multi-agent systems (AI Agents) to rebuild and refactor the Holiday Extras Booking Engine into a modern, performant React architecture.",
    },
  ];
}

const keyPillars = [
  {
    icon: "psychology",
    title: "Agentic Refactoring",
    desc: "Deploying specialized coder, researcher, and tester agents to parse legacy logic, resolve dependencies, and write modern React code.",
  },
  {
    icon: "rule",
    title: "100% Test Coverage",
    desc: "Every refactored module is run through an automated TDD test generation agent to write Vitest suites before code translation begins.",
  },
  {
    icon: "speed",
    title: "Optimized Performance",
    desc: "Migrating from client-heavy legacy state to server-rendered React Router routes, resulting in a 40% improvement in Largest Contentful Paint (LCP).",
  },
];

export default function BookingEngine() {
  const inlineFocusRingClass = "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none rounded";

  return (
    <>
      <NavBar />

      <main className="max-w-container-max mx-auto px-gutter mt-32 mb-section-gap">
        {/* Back navigation & Header */}
        <header className="mb-16 max-w-3xl">
          <Link
            className={`inline-flex items-center text-primary hover:opacity-80 transition-opacity font-label-sm text-label-sm mb-stack-md group ${inlineFocusRingClass}`}
            to="/"
          >
            <span className="material-symbols-outlined mr-2 text-[16px] transition-transform group-hover:-translate-x-1" aria-hidden="true">
              arrow_back
            </span>
            Back to Engineering
          </Link>
          <p className="font-label-sm text-label-sm text-primary mb-stack-md flex items-center gap-2">
            <span className="w-8 h-[1px] bg-primary" aria-hidden="true"></span> CASE STUDY: AI AGENTS
          </p>
          <h1 className="font-display-xl text-display-xl text-on-surface mb-stack-lg leading-tight">
            Rebuilding the Holiday Extras <br /> Booking Engine
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed text-secondary">
            How we are leveraging multi-agent AI systems to automate the migration,
            testing, and refactoring of a high-traffic travel booking platform
            into a zero-debt modern architecture.
          </p>
        </header>

        {/* Pillars Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16" aria-label="Key Case Study Pillars">
          {keyPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-8 shadow-sm flex flex-col gap-4"
            >
              <div className="w-12 h-12 bg-surface-container flex items-center justify-center rounded-full text-primary" aria-hidden="true">
                <span className="material-symbols-outlined text-[24px]">
                  {pillar.icon}
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-xl text-on-surface">
                {pillar.title}
              </h3>
              <p className="font-body-md text-body-md text-secondary leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </section>

        {/* Detailed Breakdown */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center" aria-labelledby="methodology-title">
          <div className="md:col-span-7 space-y-6">
            <h2 id="methodology-title" className="font-headline-lg text-headline-lg text-on-surface">
              The Agentic Workflow
            </h2>
            <p className="font-body-md text-body-md text-secondary leading-relaxed">
              Manually refactoring thousands of lines of legacy booking flows is error-prone and time-consuming. Instead of a standard manual rewrite, we use an agentic model comprising:
            </p>
            <ul className="space-y-4 font-body-md text-body-md text-secondary list-disc list-inside">
              <li>
                <strong className="text-on-surface">Codebase Researchers:</strong> Read files, scan dependencies, and build a topological layout graph of the legacy system.
              </li>
              <li>
                <strong className="text-on-surface">Test Generators:</strong> Write comprehensive integration and regression test specs using Vitest and Mock Service Worker (MSW) before changes are written.
              </li>
              <li>
                <strong className="text-on-surface">AI Coders:</strong> Transform legacy modules into modular, accessible TSX components that adhere to predefined design tokens.
              </li>
            </ul>
          </div>
          <div className="md:col-span-5">
            <div className="bg-surface-container border border-outline-variant/30 rounded-xl p-8 shadow-inner flex flex-col gap-6">
              <h3 className="font-headline-md text-headline-md text-xl text-on-surface">
                Key Metrics Achieved
              </h3>
              <div className="space-y-4">
                <div>
                  <span className="block font-display-xl text-primary leading-none">40%</span>
                  <span className="text-body-md text-secondary font-medium">Reduction in LCP</span>
                </div>
                <hr className="border-outline-variant/20" />
                <div>
                  <span className="block font-display-xl text-primary leading-none">10x</span>
                  <span className="text-body-md text-secondary font-medium">Refactoring Speedup</span>
                </div>
                <hr className="border-outline-variant/20" />
                <div>
                  <span className="block font-display-xl text-primary leading-none">100%</span>
                  <span className="text-body-md text-secondary font-medium">Automated Regression Coverage</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-stack-lg px-gutter flex flex-col md:flex-row justify-between items-center max-w-container-max mx-auto mt-section-gap border-t border-outline-variant/20 bg-surface">
        <div className="font-headline-md text-headline-md font-bold text-on-surface mb-4 md:mb-0">
          JC.DEV
        </div>
        <div className="text-on-surface-variant font-body-md text-body-md mb-4 md:mb-0 text-center md:text-left text-secondary">
          © 2024 Jonathan Clarke. Built with{" "}
          <Link to="/about-portfolio" className="underline hover:text-primary transition-colors">
            agentic precision
          </Link>
          .
        </div>
        <div className="flex space-x-6">
          <a
            className={`text-on-surface-variant font-label-sm text-label-sm hover:text-primary transition-colors transition-opacity hover:opacity-80 text-secondary ${inlineFocusRingClass}`}
            href="#"
          >
            LinkedIn
          </a>
          <a
            className={`text-on-surface-variant font-label-sm text-label-sm hover:text-primary transition-colors transition-opacity hover:opacity-80 text-secondary ${inlineFocusRingClass}`}
            href="#"
          >
            GitHub
          </a>
        </div>
      </footer>
    </>
  );
}
