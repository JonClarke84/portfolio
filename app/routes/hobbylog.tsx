import type { Route } from "./+types/hobbylog";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "HobbyLog - Kanban Board for Miniature Painters | Case Study" },
    {
      name: "description",
      content:
        "Technical write-up of HobbyLog, a pnpm/Turborepo monorepo application featuring React 19, Hono, PostgreSQL, Pragmatic Drag-and-Drop, and Gemini AI GitHub integration.",
    },
  ];
}

const boardFeatures = [
  {
    title: "7-Stage Backlog Pipeline",
    desc: "Tracks miniatures systematically through: Boxed -> Building -> Built -> Primed -> Painting -> Completed This Year / Abandoned.",
  },
  {
    title: "Pragmatic Drag and Drop",
    desc: "Implemented sub-second drag-and-drop reordering on desktop using @atlaskit/pragmatic-drag-and-drop, with action-based fallback menus on mobile devices.",
  },
  {
    title: "Dynamic Backlog Collections",
    desc: "Separates collection archives from the active paint board, letting users onboard items, manage color-coded armies, and restore items back to the board.",
  },
];

const techStackAchievements = [
  {
    title: "Turborepo Monorepo Layout",
    desc: "Organized using Turborepo and pnpm workspaces to separate the React 19 SPA (apps/web), Hono Node.js API (apps/api), and shared zod schemas (packages/shared).",
  },
  {
    title: "Relational Drizzle Schema",
    desc: "Utilizes PostgreSQL and Drizzle ORM to manage custom user profiles, army color labels, task nodes, and backlog history.",
  },
  {
    title: "Secure Clerk Auth",
    desc: "Wired with Clerk auth middleware, supporting Google OAuth login flows in production while falling back to mock user fixtures in local dev.",
  },
];

const aiIntegrations = [
  {
    title: "Automated Pull Request Review",
    desc: "Integrated a custom Gemini AI action that scans new pull requests and provides immediate code review feedback on security and performance.",
  },
  {
    title: "Intelligent Issue Triage",
    desc: "Enables automatic label categorization and issue triaging by parsing bug reports and feature requests.",
  },
  {
    title: "GitHub Chat Co-Developer",
    desc: "Supports summoning `@gemini-cli` in issues or PR comments to request automated refactoring plans, test generation, or code explanations.",
  },
];

export default function HobbyLog() {
  return (
    <>
      <NavBar />

      <main className="max-w-container-max mx-auto px-gutter mt-32 mb-section-gap">
        {/* Header */}
        <header className="mb-16 max-w-4xl">
          <p className="font-label-sm text-label-sm text-primary mb-stack-md flex items-center gap-2">
            <span className="w-8 h-[1px] bg-primary" aria-hidden="true"></span> CASE STUDY: PERSONAL PROJECT
          </p>
          <h1 className="font-display-xl text-display-xl text-on-surface mb-stack-lg leading-tight">
            HobbyLog
          </h1>
          <p className="font-body-lg text-body-lg text-secondary leading-relaxed max-w-3xl">
            HobbyLog is a personal backlog tracker designed specifically for tabletop miniature painters,
            acting as a customized Trello board to manage painting workflows, labels, and collection metrics.
          </p>
        </header>

        {/* Tech Stack Highlights */}
        <section className="mb-16 bg-surface-container border border-outline-variant/30 rounded-2xl p-8" aria-label="Core Technology Stack">
          <h3 className="font-label-sm text-label-sm text-primary uppercase tracking-wider block mb-4">Core Technology Stack</h3>
          <div className="flex flex-wrap gap-4 font-body-md text-on-surface font-semibold text-lg">
            <span className="bg-surface-container-lowest px-4 py-2 rounded-lg border border-outline-variant/20">React 19</span>
            <span className="bg-surface-container-lowest px-4 py-2 rounded-lg border border-outline-variant/20">React Router 7</span>
            <span className="bg-surface-container-lowest px-4 py-2 rounded-lg border border-outline-variant/20">Hono (Node.js)</span>
            <span className="bg-surface-container-lowest px-4 py-2 rounded-lg border border-outline-variant/20">PostgreSQL</span>
            <span className="bg-surface-container-lowest px-4 py-2 rounded-lg border border-outline-variant/20">Drizzle ORM</span>
            <span className="bg-surface-container-lowest px-4 py-2 rounded-lg border border-outline-variant/20">Clerk Auth</span>
            <span className="bg-surface-container-lowest px-4 py-2 rounded-lg border border-outline-variant/20">Turborepo &amp; pnpm</span>
          </div>
        </section>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Main Achievements Column (8 cols) */}
          <div className="md:col-span-8 space-y-12">
            {/* Board Features */}
            <section aria-labelledby="board-features-title">
              <div className="border-b border-outline-variant/30 pb-4 mb-6">
                <h2 id="board-features-title" className="font-headline-lg text-headline-lg text-on-surface">Board &amp; Pipeline UX</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {boardFeatures.map((item, idx) => (
                  <div key={idx} className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-6 shadow-sm">
                    <h4 className="font-headline-md text-headline-md text-base text-on-surface mb-2 font-bold">{item.title}</h4>
                    <p className="text-secondary text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Monorepo Architecture */}
            <section aria-labelledby="architecture-title">
              <div className="border-b border-outline-variant/30 pb-4 mb-6">
                <h2 id="architecture-title" className="font-headline-lg text-headline-lg text-on-surface">Monorepo Architecture</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {techStackAchievements.map((item, idx) => (
                  <div key={idx} className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-6 shadow-sm">
                    <h4 className="font-headline-md text-headline-md text-base text-on-surface mb-2 font-bold">{item.title}</h4>
                    <p className="text-secondary text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* AI Integrations */}
            <section aria-labelledby="ai-title">
              <div className="border-b border-outline-variant/30 pb-4 mb-6">
                <h2 id="ai-title" className="font-headline-lg text-headline-lg text-on-surface">Gemini AI Assistant Integration</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {aiIntegrations.map((item, idx) => (
                  <div key={idx} className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-6 shadow-sm">
                    <h4 className="font-headline-md text-headline-md text-base text-on-surface mb-2 font-bold">{item.title}</h4>
                    <p className="text-secondary text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Sidebar Link Column (4 cols) */}
          <div className="md:col-span-4 space-y-8 md:sticky md:top-24">
            <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-6 shadow-sm flex flex-col gap-4">
              <h3 className="font-headline-md text-headline-md text-base text-on-surface font-bold">
                Live Project Link
              </h3>
              <p className="text-secondary text-sm leading-relaxed">
                Visit the live HobbyLog application to manage backlog columns, drag painting tasks, and view army stats.
              </p>
              <a 
                href="https://hobbylog.jonathanclarke.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-xl border border-outline-variant/20 hover:border-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none"
                aria-label="Visit HobbyLog live site (opens in new tab)"
              >
                <div className="relative aspect-[4/3] bg-surface-container overflow-hidden">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdS5G6eKKMiO5822ZOubwYf9pUb-Yk67ZaNntxBjJoatWzSf1idN6ogMpMVUwCYFLpXrmxQWcaggxPx--VfEPAqBx3f3hDPQV8N1QDUDZasxpLP9m7hf4vvuRtBC495DSNze6qxvBtT5M1ZwCJpNRZNTKguOuhD9BzHvD2XO7RzlcBqu9fNBE_U40Eu59Yv4JFomPC4iiFAdMFtB0TQO9wMAdlTVsLV_n6eVIRaI9-9MGdQ82Go0eQOcCpFKCS7H1Agt-ruwuyUZQ" 
                    alt="HobbyLog web application preview" 
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
