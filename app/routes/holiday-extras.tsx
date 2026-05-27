import type { Route } from "./+types/holiday-extras";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Engineering at holidayextras.com | Case Study" },
    {
      name: "description",
      content:
        "Detailed review of engineering contributions, React/Remix monolith migration, pioneering Claude Code adoption, and conversion optimizations at holidayextras.com.",
    },
  ];
}

const seniorAchievements = [
  {
    title: "Pioneered Claude Code Adoption",
    desc: "Led the business-wide adoption of Claude Code, establishing tooling standards and workflow patterns that significantly accelerated feature delivery across engineering teams.",
  },
  {
    title: "Legacy Monolith Migration",
    desc: "Developed AI-first workflows and custom rendering pipelines (including a markdown-to-react compiler) to systematically migrate legacy frontend codebases to Remix and React Router.",
  },
  {
    title: "AI Tools & Infrastructure",
    desc: "Built the frontend interfaces for user-facing AI tools/chat systems and designed an internal AI skills marketplace to empower engineers with custom AI agents.",
  },
  {
    title: "AI Innovation Platform",
    desc: "Contributed to internal platform initiatives designed to lower the barrier to entry, enabling non-technical staff to deploy AI solutions.",
  },
];

const midAchievements = [
  {
    title: "Trips Optimization & Monetization",
    desc: "Drove key optimizations on the Trips platform, helping increase items booked per trip and boosting trip search completion rates by 30%.",
  },
  {
    title: "Session-to-Search Conversion Win",
    desc: "Redesigned and optimized trip-creation forms, driving a 50% increase in session-to-search conversion rates.",
  },
  {
    title: "GraphQL & Mentorship",
    desc: "Pair programmed and mentored junior/mid engineers while designing and implementing key products in the Trips GraphQL API.",
  },
];

const apprenticeAchievements = [
  {
    title: "Apprenticeship Distinction",
    desc: "Achieved a Distinction in the software engineering apprenticeship, mastering ruby, javascript, and modern web application patterns.",
  },
  {
    title: "Makers Academy Training",
    desc: "Completed intensive, full-time engineering training via Makers Academy, establishing strong TDD and architectural principles.",
  },
];

export default function HolidayExtras() {
  return (
    <>
      <NavBar />

      <main className="max-w-container-max mx-auto px-gutter mt-32 mb-section-gap">
        {/* Header */}
        <header className="mb-16 max-w-4xl">
          <p className="font-label-sm text-label-sm text-primary mb-stack-md flex items-center gap-2">
            <span className="w-8 h-[1px] bg-primary" aria-hidden="true"></span> CASE STUDY: COMMERCIAL ENGINEERING
          </p>
          <h1 className="font-display-xl text-display-xl text-on-surface mb-stack-lg leading-tight">
            Engineering at holidayextras.com
          </h1>
          <p className="font-body-lg text-body-lg text-secondary leading-relaxed max-w-3xl">
            A comprehensive overview of my architectural contributions and engineering accomplishments
            across four years at Holiday Extras. From automating legacy monolith migrations to 
            pioneering business-wide AI tool adoption and driving massive conversion wins.
          </p>
        </header>

        {/* Tech Stack Highlights */}
        <section className="mb-16 bg-surface-container border border-outline-variant/30 rounded-2xl p-8" aria-label="Core Technology Stack">
          <h3 className="font-label-sm text-label-sm text-primary uppercase tracking-wider block mb-4">Core Technology Stack</h3>
          <div className="flex flex-wrap gap-4 font-body-md text-on-surface font-semibold text-lg">
            <span className="bg-surface-container-lowest px-4 py-2 rounded-lg border border-outline-variant/20">TypeScript</span>
            <span className="bg-surface-container-lowest px-4 py-2 rounded-lg border border-outline-variant/20">React</span>
            <span className="bg-surface-container-lowest px-4 py-2 rounded-lg border border-outline-variant/20">Remix / React Router</span>
            <span className="bg-surface-container-lowest px-4 py-2 rounded-lg border border-outline-variant/20">Node.js</span>
            <span className="bg-surface-container-lowest px-4 py-2 rounded-lg border border-outline-variant/20">GraphQL</span>
            <span className="bg-surface-container-lowest px-4 py-2 rounded-lg border border-outline-variant/20">Ruby / Go</span>
          </div>
        </section>

        {/* Achievements Timeline/Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Main Achievements Column (8 cols) */}
          <div className="md:col-span-8 space-y-12">
            {/* Senior Role */}
            <section aria-labelledby="senior-role-title">
              <div className="border-b border-outline-variant/30 pb-4 mb-6">
                <span className="font-label-sm text-label-sm text-primary font-bold">APR 2026 — PRESENT</span>
                <h2 id="senior-role-title" className="font-headline-lg text-headline-lg text-on-surface">Senior Software Engineer</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {seniorAchievements.map((item, idx) => (
                  <div key={idx} className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-6 shadow-sm">
                    <h4 className="font-headline-md text-headline-md text-base text-on-surface mb-2 font-bold">{item.title}</h4>
                    <p className="text-secondary text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Mid Role */}
            <section aria-labelledby="mid-role-title">
              <div className="border-b border-outline-variant/30 pb-4 mb-6">
                <span className="font-label-sm text-label-sm text-primary font-bold">OCT 2023 — MAR 2026</span>
                <h2 id="mid-role-title" className="font-headline-lg text-headline-lg text-on-surface">Software Engineer II</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {midAchievements.map((item, idx) => (
                  <div key={idx} className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-6 shadow-sm">
                    <h4 className="font-headline-md text-headline-md text-base text-on-surface mb-2 font-bold">{item.title}</h4>
                    <p className="text-secondary text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Apprentice Role */}
            <section aria-labelledby="apprentice-role-title">
              <div className="border-b border-outline-variant/30 pb-4 mb-6">
                <span className="font-label-sm text-label-sm text-primary font-bold">FEB 2022 — JUL 2023</span>
                <h2 id="apprentice-role-title" className="font-headline-lg text-headline-lg text-on-surface">Apprentice Software Engineer</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {apprenticeAchievements.map((item, idx) => (
                  <div key={idx} className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-6 shadow-sm">
                    <h4 className="font-headline-md text-headline-md text-base text-on-surface mb-2 font-bold">{item.title}</h4>
                    <p className="text-secondary text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Metrics Column (4 cols) */}
          <div className="md:col-span-4 space-y-8 md:sticky md:top-24">
            <div className="bg-inverse-surface text-inverse-on-surface p-8 rounded-2xl shadow-md flex flex-col gap-6">
              <h3 className="font-headline-md text-headline-md text-lg border-b border-surface-variant/20 pb-2">
                Business Impact Metrics
              </h3>
              <div className="space-y-4">
                <div>
                  <span className="block font-display-xl text-primary-container leading-none font-bold">30%</span>
                  <span className="text-sm text-surface-variant/80 font-medium">Trip Search Completion Increase</span>
                </div>
                <hr className="border-surface-variant/10" />
                <div>
                  <span className="block font-display-xl text-primary-container leading-none font-bold">50%</span>
                  <span className="text-sm text-surface-variant/80 font-medium">Session-to-Search Conversion Win</span>
                </div>
                <hr className="border-surface-variant/10" />
                <div>
                  <span className="block font-display-xl text-primary-container leading-none font-bold">Distinction</span>
                  <span className="text-sm text-surface-variant/80 font-medium">Makers Academy Apprenticeship Grade</span>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-6 shadow-sm flex flex-col gap-4">
              <h3 className="font-headline-md text-headline-md text-base text-on-surface font-bold">
                Live Platform Link
              </h3>
              <p className="text-secondary text-sm leading-relaxed">
                Visit the live holidayextras.com booking portal to view the search flows and booking engines optimized.
              </p>
              <a 
                href="https://www.holidayextras.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-xl border border-outline-variant/20 hover:border-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none"
                aria-label="Visit holidayextras.com (opens in new tab)"
              >
                <div className="relative aspect-[4/3] bg-surface-container overflow-hidden">
                  <img 
                    src="/holidayextras_thumbnail.png" 
                    alt="holidayextras.com browser mockup screenshot" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <span className="bg-white/90 text-primary px-4 py-2 rounded-full text-xs font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                      Visit Site
                      <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer precisionText="agentic precision" />
    </>
  );
}
