import type { Route } from "./+types/about-portfolio";
import { Link } from "react-router";
import NavBar from "../components/NavBar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "How this Portfolio was Made | AI Architecture" },
    {
      name: "description",
      content:
        "Technical breakdown of how this developer portfolio was designed with Google Stitch, developed with Antigravity, tested using TDD, and deployed via Kamal 2.",
    },
  ];
}

export default function AboutPortfolio() {
  const inlineFocusRingClass =
    "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none rounded";

  return (
    <>
      <NavBar />

      <main className="max-w-container-max mx-auto px-gutter mt-32 mb-section-gap">
        {/* Back Navigation & Page Header */}
        <header className="mb-16 max-w-4xl">
          <Link
            className={`inline-flex items-center text-primary hover:opacity-80 transition-opacity font-label-sm text-label-sm mb-stack-md group ${inlineFocusRingClass}`}
            to="/"
          >
            <span
              className="material-symbols-outlined mr-2 text-[16px] transition-transform group-hover:-translate-x-1"
              aria-hidden="true"
            >
              arrow_back
            </span>
            Back to Engineering
          </Link>
          <p className="font-label-sm text-label-sm text-primary mb-stack-md flex items-center gap-2">
            <span className="w-8 h-[1px] bg-primary" aria-hidden="true"></span> SITE ARCHITECTURE
          </p>
          <h1 className="font-display-xl text-display-xl text-on-surface mb-stack-lg leading-tight">
            How this Portfolio was Made
          </h1>
          <p className="font-body-lg text-body-lg text-secondary leading-relaxed max-w-3xl">
            This site serves as a live case study demonstrating how modern AI pair-programming 
            workflows can collaborate with a developer to build highly performant, accessible, 
            and robust web applications.
          </p>
        </header>

        {/* The Core Workflow Sections */}
        <div className="space-y-16 mb-20">
          {/* Section 1: Design & Development (Stitch & Antigravity) */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch" aria-labelledby="workflow-title">
            <div className="md:col-span-12">
              <h2 id="workflow-title" className="font-headline-lg text-headline-lg text-on-surface mb-4">
                The Creative Workflow
              </h2>
              <p className="font-body-md text-secondary max-w-2xl mb-8">
                The site was built using a hybrid AI and human-led engineering model, dividing responsibility 
                between visual specification and structural implementation.
              </p>
            </div>

            {/* Google Stitch Card */}
            <div className="md:col-span-6 bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-8 flex flex-col justify-between work-card">
              <div>
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-xl text-primary mb-6" aria-hidden="true">
                  <span className="material-symbols-outlined text-[28px]">palette</span>
                </div>
                <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider block mb-2">Visual Foundation</span>
                <h3 className="font-headline-md text-headline-md text-2xl text-on-surface mb-4">Designed with Google Stitch</h3>
                <p className="font-body-md text-secondary leading-relaxed mb-6">
                  The visual layout, user interactions, and tokenized design system (including custom fonts, 
                  vibrant secondary states, and grid layouts) were designed using Google Labs' AI-native UI tool, 
                  Stitch. Design tokens were exported directly as pure CSS variables, ensuring visual design 
                  intent mapped perfectly to code.
                </p>
              </div>
              <div className="border-t border-outline-variant/20 pt-4 flex gap-4 text-xs font-semibold text-secondary">
                <span>✓ HSL Tailored Colors</span>
                <span>✓ Fluid Typography</span>
                <span>✓ Design Tokens</span>
              </div>
            </div>

            {/* Antigravity Card */}
            <div className="md:col-span-6 bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-8 flex flex-col justify-between work-card">
              <div>
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-xl text-primary mb-6" aria-hidden="true">
                  <span className="material-symbols-outlined text-[28px]">smart_toy</span>
                </div>
                <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider block mb-2">Development Partner</span>
                <h3 className="font-headline-md text-headline-md text-2xl text-on-surface mb-4">Created with Antigravity</h3>
                <p className="font-body-md text-secondary leading-relaxed mb-6">
                  Antigravity, a powerful agentic AI coding assistant from Google DeepMind, acted as the primary 
                  implementation agent. It bootstrapped the React Router 7 framework, integrated the Google Stitch 
                  design system, refactored pages, conducted automated accessibility (a11y) passes, and ran 
                  local compilers and bundlers to ensure production readiness.
                </p>
              </div>
              <div className="border-t border-outline-variant/20 pt-4 flex gap-4 text-xs font-semibold text-secondary">
                <span>✓ Automated A11y Passes</span>
                <span>✓ Environment Config</span>
                <span>✓ Shell Validation</span>
              </div>
            </div>
          </section>

          {/* Section 2: TDD Red/Green Phase Approach */}
          <section className="bg-surface-container-low rounded-2xl p-8 md:p-12 border border-outline-variant/20" aria-labelledby="tdd-title">
            <div className="max-w-3xl">
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider block mb-2">Engineering Rigor</span>
              <h2 id="tdd-title" className="font-headline-lg text-headline-lg text-on-surface mb-6">
                Test-Driven Development (TDD) Workflow
              </h2>
              <p className="font-body-md text-secondary leading-relaxed mb-8">
                To guarantee stability, accessibility, and zero-regression updates, the entire application 
                was constructed under a strict Test-Driven Development (TDD) red/green cycle.
              </p>
            </div>

            {/* TDD Phases Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Red Phase */}
              <div className="bg-surface-container-lowest border-l-4 border-error rounded-r-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-6 h-6 rounded-full bg-error text-white font-bold flex items-center justify-center text-xs" aria-hidden="true">1</span>
                  <h4 className="font-headline-md text-headline-md text-lg text-on-surface">Red Phase (Write Tests)</h4>
                </div>
                <p className="font-body-md text-secondary leading-relaxed text-sm">
                  Before a single line of feature code was written, companion test files were defined using 
                  Vitest and React Testing Library. Tests asserted the existence of accessible header landmarks, 
                  semantic markup tags, keyboard focus targets, and routing boundaries.
                </p>
              </div>

              {/* Green Phase */}
              <div className="bg-surface-container-lowest border-l-4 border-primary rounded-r-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-6 h-6 rounded-full bg-primary text-white font-bold flex items-center justify-center text-xs" aria-hidden="true">2</span>
                  <h4 className="font-headline-md text-headline-md text-lg text-on-surface">Green Phase (Implement)</h4>
                </div>
                <p className="font-body-md text-secondary leading-relaxed text-sm">
                  The minimal React code necessary to satisfy the test assertions was written. Focus was kept 
                  purely on implementing correct routing hooks, importing components, and using appropriate 
                  semantic HTML structures to transition the suite from failing (Red) to passing (Green).
                </p>
              </div>

              {/* Refactor Phase */}
              <div className="bg-surface-container-lowest border-l-4 border-tertiary rounded-r-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-6 h-6 rounded-full bg-tertiary text-white font-bold flex items-center justify-center text-xs" aria-hidden="true">3</span>
                  <h4 className="font-headline-md text-headline-md text-lg text-on-surface">Refactor (Clean & Optimize)</h4>
                </div>
                <p className="font-body-md text-secondary leading-relaxed text-sm">
                  With the safety net of passing tests, the code was refactored. We extracted components, 
                  optimized Tailwind utilities, streamlined layout parameters, and completed accessibility sweeps 
                  confident that all previously defined specifications remained green.
                </p>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-3xl" aria-hidden="true">verified_user</span>
                <span className="font-body-md text-on-surface font-medium text-sm md:text-base">
                  All 12 client-side, layout, and integration test assertions run and pass in &lt; 1.5 seconds.
                </span>
              </div>
              <span className="bg-primary/10 text-primary font-label-sm text-xs px-3 py-1 rounded-full font-bold">
                TESTS: PASSED
              </span>
            </div>
          </section>

          {/* Section 3: Technical Stack Details */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center" aria-labelledby="stack-title">
            <div className="md:col-span-7 space-y-6">
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider block mb-2">Modern Frameworks</span>
              <h2 id="stack-title" className="font-headline-lg text-headline-lg text-on-surface">
                The Technology Stack
              </h2>
              <p className="font-body-md text-secondary leading-relaxed">
                The architecture uses lightweight, modern web frameworks chosen to minimize bundle size, 
                maximize rendering speed, and ensure absolute development predictability:
              </p>
              <ul className="space-y-4 font-body-md text-secondary" role="list">
                <li className="flex gap-3 items-start">
                  <span className="material-symbols-outlined text-primary mt-1" aria-hidden="true">check_circle</span>
                  <div>
                    <strong className="text-on-surface block">React Router 7:</strong>
                    Combines client-side hydration, declarative routing, and meta headers configuration to eliminate page-load lag.
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="material-symbols-outlined text-primary mt-1" aria-hidden="true">check_circle</span>
                  <div>
                    <strong className="text-on-surface block">Tailwind CSS v4:</strong>
                    Configured via the new compiler engine. Styles are declared using native `@theme` directives in standard CSS variables, completely removing JS config setup overhead.
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="material-symbols-outlined text-primary mt-1" aria-hidden="true">check_circle</span>
                  <div>
                    <strong className="text-on-surface block">Vitest &amp; React Testing Library:</strong>
                    Provides quick-feedback testing in a browser-like JSDOM context. Running on top of Vite's fast transformation engine, it runs tests on code change in milliseconds.
                  </div>
                </li>
              </ul>
            </div>
            <div className="md:col-span-5">
              <div className="bg-surface-container border border-outline-variant/30 rounded-2xl p-8 shadow-inner space-y-4">
                <h3 className="font-headline-md text-headline-md text-xl text-on-surface">
                  Dependency Overview
                </h3>
                <div className="space-y-3 font-label-sm text-label-sm text-secondary">
                  <div className="flex justify-between border-b border-outline-variant/20 pb-2">
                    <span>React / React DOM</span>
                    <span className="font-bold text-on-surface">v19.2</span>
                  </div>
                  <div className="flex justify-between border-b border-outline-variant/20 pb-2">
                    <span>React Router</span>
                    <span className="font-bold text-on-surface">v7.15</span>
                  </div>
                  <div className="flex justify-between border-b border-outline-variant/20 pb-2">
                    <span>Tailwind CSS</span>
                    <span className="font-bold text-on-surface">v4.2</span>
                  </div>
                  <div className="flex justify-between border-b border-outline-variant/20 pb-2">
                    <span>Vitest</span>
                    <span className="font-bold text-on-surface">v4.1</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Node.js / Docker</span>
                    <span className="font-bold text-on-surface">v22 LTS</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Hosting & Deployment details */}
          <section className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-8 md:p-12" aria-labelledby="hosting-title">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-7 space-y-6">
                <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider block mb-2">Infrastructure</span>
                <h2 id="hosting-title" className="font-headline-lg text-headline-lg text-on-surface">
                  Hosting &amp; Deployment Pipeline
                </h2>
                <p className="font-body-md text-secondary leading-relaxed">
                  The application is compiled into a lightweight Docker image using a multi-stage production builder 
                  targeting AMD64 architecture. Deployments are orchestrated via <strong>Kamal 2</strong>, enabling zero-downtime 
                  container updates on the server.
                </p>
                <div className="bg-surface-container p-6 rounded-xl space-y-4">
                  <h4 className="font-headline-md text-headline-md text-base text-on-surface">DigitalOcean Target Environment</h4>
                  <ul className="space-y-2 text-sm text-secondary list-disc list-inside font-body-md">
                    <li>Droplet IP: <code className="bg-surface-container-lowest px-1.5 py-0.5 rounded text-primary">xx.xxx.xx.xxx</code></li>
                    <li>Domain Name: <code className="bg-surface-container-lowest px-1.5 py-0.5 rounded text-primary">portfolio.jonathanclarke.dev</code></li>
                    <li>Traffic Proxy: Automated SSL auto-certification via Let's Encrypt managed by Kamal Proxy routing requests to port 3000.</li>
                  </ul>
                </div>
              </div>
              <div className="md:col-span-5 flex flex-col justify-between bg-surface-container-low rounded-xl p-8 border border-outline-variant/20">
                <div>
                  <h3 className="font-headline-md text-headline-md text-lg text-on-surface mb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary" aria-hidden="true">dns</span>
                    Kamal 2 Config Summary
                  </h3>
                  <p className="font-body-md text-secondary text-sm leading-relaxed mb-4">
                    The config in <code className="text-xs bg-surface-container-lowest p-1 rounded font-label-sm">config/deploy.yml</code> declares:
                  </p>
                  <pre className="font-label-sm text-xs bg-inverse-surface text-inverse-on-surface p-4 rounded-lg overflow-x-auto text-left">
{`service: portfolio
image: jonclarke84/portfolio
servers:
  web:
    - xx.xxx.xx.xxx
proxy:
  ssl: true
  hosts:
    - portfolio.jonathanclarke.dev
  app_port: 3000`}
                  </pre>
                </div>
                <div className="mt-6 border-t border-outline-variant/20 pt-4">
                  <a
                    href="https://github.com/JonClarke84/portfolio"
                    className={`inline-flex items-center text-primary font-body-md text-sm font-semibold hover:underline gap-1 ${inlineFocusRingClass}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Repository on GitHub
                    <span className="material-symbols-outlined text-base" aria-hidden="true">open_in_new</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-low border-t border-outline-variant/20 py-stack-lg">
        <div className="flex flex-col md:flex-row justify-between items-center px-gutter max-w-container-max mx-auto">
          <div className="mb-8 md:mb-0">
            <a
              className={`font-headline-md text-headline-md font-bold text-primary mb-2 block ${inlineFocusRingClass}`}
              href="#"
            >
              JC.DEV
            </a>
            <p className="text-secondary-fixed-variant font-body-md max-w-xs">
              © 2024 Jonathan Clarke.{" "}
              <Link to="/about-portfolio" className="underline hover:text-primary transition-colors">
                Built with technical precision.
              </Link>
            </p>
          </div>
          <div className="flex gap-8">
            <a
              className={`text-secondary-fixed-variant hover:text-primary transition-colors opacity-80 hover:opacity-100 flex items-center gap-2 ${inlineFocusRingClass}`}
              href="#"
            >
              <span className="material-symbols-outlined text-xl" aria-hidden="true">share</span>{" "}
              GitHub
            </a>
            <a
              className={`text-secondary-fixed-variant hover:text-primary transition-colors opacity-80 hover:opacity-100 flex items-center gap-2 ${inlineFocusRingClass}`}
              href="#"
            >
              <span className="material-symbols-outlined text-xl" aria-hidden="true">link</span>{" "}
              LinkedIn
            </a>
            <a
              className={`text-secondary-fixed-variant hover:text-primary transition-colors opacity-80 hover:opacity-100 flex items-center gap-2 ${inlineFocusRingClass}`}
              href="#"
            >
              <span className="material-symbols-outlined text-xl" aria-hidden="true">podcasts</span>{" "}
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
