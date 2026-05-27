import type { Route } from "./+types/shopping-app";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Family Shopping App - Mobile Weekly Planner | Case Study" },
    {
      name: "description",
      content:
        "Technical write-up of the Family Shopping App, a Rails 8.1, Hotwire, and SQLite3 application designed for mobile meal planning and weekly shopping using fractional decimal sorting.",
    },
  ];
}

const keyFeatures = [
  {
    title: "Mobile-Only Design",
    desc: "Purpose-built exclusively for mobile viewports to align with the real-world context of grocery store shopping and quick kitchen meal planning. Avoids unnecessary desktop bloat.",
  },
  {
    title: "Family Meal Planner",
    desc: "Integrates meal planning directly with shopping lists, allowing recipes and ingredients to dynamically generate and adjust the weekly grocery checklist.",
  },
  {
    title: "Multi-Tenant Family Groups",
    desc: "Uses a session-based Group tenant system to isolate list contents. Invites allow family members to share lists and sync checks in real-time.",
  },
  {
    title: "Route Optimization",
    desc: "Learns the layout of your supermarket as you drag items into order. Future shopping lists automatically sequence items to match your path through the aisles.",
  },
];

const technicalImplementation = [
  {
    title: "Decimal Ordering Algorithm",
    desc: "Solves index-recalculation penalties by using fractional sort_order values (precision 15, scale 5). Moving an item calculates the midpoint between adjacent nodes (prev + next) / 2 in O(1) DB write time.",
  },
  {
    title: "Modern Hotwire Stack",
    desc: "Powered by Rails 8.1 and Hotwire (Turbo + Stimulus). Re-renders list item checks and sorting updates instantly over the wire without full page requests.",
  },
  {
    title: "Secure Tenant Scoping",
    desc: "Chains database queries strictly through current_group to prevent cross-tenant data leaks. Secured with bcrypt authentication.",
  },
];

export default function ShoppingApp() {
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
            Family Shopping App
          </h1>
          <p className="font-body-lg text-body-lg text-secondary leading-relaxed max-w-3xl">
            A specialized mobile-only shopping and meal planning tool built for household coordination. 
            By focusing strictly on a compact mobile scope, it provides a streamlined experience for 
            family members to plan weekly meals and manage grocery checklists on the go.
          </p>
        </header>

        {/* Tech Stack Highlights */}
        <section className="mb-16 bg-surface-container border border-outline-variant/30 rounded-2xl p-8" aria-label="Core Technology Stack">
          <h3 className="font-label-sm text-label-sm text-primary uppercase tracking-wider block mb-4">Core Technology Stack</h3>
          <div className="flex flex-wrap gap-4 font-body-md text-on-surface font-semibold text-lg">
            <span className="bg-surface-container-lowest px-4 py-2 rounded-lg border border-outline-variant/20">Ruby 3.3</span>
            <span className="bg-surface-container-lowest px-4 py-2 rounded-lg border border-outline-variant/20">Rails 8.1</span>
            <span className="bg-surface-container-lowest px-4 py-2 rounded-lg border border-outline-variant/20">SQLite3</span>
            <span className="bg-surface-container-lowest px-4 py-2 rounded-lg border border-outline-variant/20">Hotwire (Turbo/Stimulus)</span>
            <span className="bg-surface-container-lowest px-4 py-2 rounded-lg border border-outline-variant/20">Active Record</span>
            <span className="bg-surface-container-lowest px-4 py-2 rounded-lg border border-outline-variant/20">bcrypt Auth</span>
          </div>
        </section>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Main Achievements Column (8 cols) */}
          <div className="md:col-span-8 space-y-12">
            {/* Project Goals */}
            <section aria-labelledby="goals-title">
              <div className="border-b border-outline-variant/30 pb-4 mb-6">
                <h2 id="goals-title" className="font-headline-lg text-headline-lg text-on-surface">Designed For Family Context</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {keyFeatures.map((item, idx) => (
                  <div key={idx} className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-6 shadow-sm">
                    <h4 className="font-headline-md text-headline-md text-base text-on-surface mb-2 font-bold">{item.title}</h4>
                    <p className="text-secondary text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Technical Highlights */}
            <section aria-labelledby="technical-title">
              <div className="border-b border-outline-variant/30 pb-4 mb-6">
                <h2 id="technical-title" className="font-headline-lg text-headline-lg text-on-surface">Architecture &amp; Algorithm</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {technicalImplementation.map((item, idx) => (
                  <div key={idx} className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-6 shadow-sm">
                    <h4 className="font-headline-md text-headline-md text-base text-on-surface mb-2 font-bold">{item.title}</h4>
                    <p className="text-secondary text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Deep Dive on Sorting Algorithm */}
            <section aria-labelledby="algorithm-deep-dive-title" className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-8">
              <h3 id="algorithm-deep-dive-title" className="font-headline-lg text-headline-lg text-on-surface mb-4">
                Decimal/Fractional Ordering Algorithm
              </h3>
              <p className="text-secondary text-body-md leading-relaxed mb-6">
                Traditional drag-and-drop lists assign integer indexes (<code className="text-primary font-semibold">1, 2, 3...</code>) 
                to items. However, inserting an item into the middle of the list forces the system to increment the sort index 
                of all subsequent rows, triggering an expensive <code className="text-primary font-semibold">O(N)</code> update query 
                in the database.
              </p>
              <div className="bg-surface-container border border-outline-variant/20 rounded-xl p-6 mb-6">
                <h4 className="font-semibold text-on-surface mb-2">Midpoint Calculation Formula:</h4>
                <div className="font-mono text-primary text-lg bg-surface-container-lowest p-4 rounded-lg border border-outline-variant/10 text-center">
                  new_order = (prev_order + next_order) / 2.0
                </div>
              </div>
              <p className="text-secondary text-body-md leading-relaxed">
                By implementing a decimal <code className="text-primary font-semibold">sort_order</code> field in the database 
                (using SQLite's floating point decimal properties with precision: 15, scale: 5), we can calculate a fractional midpoint. 
                For example, dragging an item between sort position <code className="text-on-surface font-semibold">1.0</code> and 
                <code className="text-on-surface font-semibold">2.0</code> updates only the single shifted item's value to 
                <code className="text-on-surface font-semibold">1.5</code>. This delivers a constant 
                <code className="text-primary font-semibold">O(1)</code> write complexity, scaling gracefully for daily family sorting activities.
              </p>
              <p className="text-secondary text-body-md leading-relaxed mt-4">
                This ordering is crucial for weekly grocery runs. As family members drag items into order while shopping, the app learns their relative supermarket aisle positions. When these items are added to subsequent shopping lists, the database automatically sequences them to match the optimal path through the physical store, streamlining the family shopping routine.
              </p>
            </section>
          </div>

          {/* Right Sidebar Link Column (4 cols) */}
          <div className="md:col-span-4 space-y-8 md:sticky md:top-24">
            <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-6 shadow-sm flex flex-col gap-4">
              <h3 className="font-headline-md text-headline-md text-base text-on-surface font-bold">
                Live Project Link
              </h3>
              <p className="text-secondary text-sm leading-relaxed">
                Visit the live Family Shopping App interface to check out the mobile-optimized checklist, meal planner, and sorting features.
              </p>
              <a 
                href="https://www.jonathanclarke.dev/shopping" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-xl border border-outline-variant/20 hover:border-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none"
                aria-label="Visit Family Shopping App live site (opens in new tab)"
              >
                <div className="relative aspect-[4/3] bg-surface-container overflow-hidden">
                  <img 
                    src="/shopping_list.png" 
                    alt="Family Shopping App mobile view preview" 
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

      <Footer precisionText="fractional ordering precision" />
    </>
  );
}
