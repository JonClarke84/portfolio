import type { Route } from "./+types/video";
import { Link } from "react-router";
import NavBar from "../components/NavBar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Video Production & Strategic Leadership - DevPortfolio" },
    {
      name: "description",
      content:
        "Before software engineering, I founded and led the internal Video Production unit at Holiday Extras. Operating like a startup, managing strategy, budgeting, and scaling teams.",
    },
  ];
}

const strategicImpacts = [
  "Founded internal unit from scratch",
  "Recruited and scaled specialized team",
  "Managed enterprise budgeting",
  "Elevated production quality standard",
  "Legoland Windsor Freelance Producer (2020)",
];

const videos = [
  {
    title: "The Ultimate Guide to Airport Parking",
    channel: "Holiday Extras Travel Guides",
    description: "A comprehensive breakdown of travel logistics and operational efficiency.",
    image:
      "https://lh3.googleusercontent.com/aida/ADBb0ujbdb_gWEfPMEViSvUlUO78tay_ImAQM33imojwDz2So84Adh5kops-z-H7Nir9wrQZV_IzUXzfPa3vPEjvB4QOQ2XrszQiuv6pp7PvxuKT9dhPG1SYE7o8aW3kV79AQq_tiJmNUpB7MrKp4BLq1NYnbqbTCnY6tOnAW5iKCPTczI-MztbkYIQRURFOFkuDyMsQE6SBOEc-V9SeMWbpZcmU3zbovgb8VuxMxDceuTv9WT6Pf9R8hDzkPg",
  },
  {
    title: "How to Save Money on Your Next Holiday",
    channel: "Holiday Extras",
    description: "Strategic travel advice communicating complex financial tips clearly.",
    image:
      "https://lh3.googleusercontent.com/aida/ADBb0uhNQ5CVDRCILas7H_QE_qt0sKaIwff2V-Hq9dHyYR_oRQFtb0NFJFweYs-RGWxvrtdJTKYFZI64ICk95ulS6EiepXzuW-SYaeRJ1-Vqh7r7_iZyW4SoLRm1LtDJE0PfzPsipZfyVpSselYJSVYvYyu8kEF2nSxVR52xQfIdSxS3xWZ4W_cfIXuMx_6xYa1NVAEuoT6r80psgoG89t5JrUJyQuPy12y6mWWuu34G4n24UFMggrjFO5C3xf8",
  },
];

export default function Video() {
  const focusRingClass = "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none rounded-lg";
  const inlineFocusRingClass = "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none rounded";

  return (
    <>
      <NavBar />
      
      {/* Main Content */}
      <main className="max-w-container-max mx-auto px-gutter md:px-gutter mt-32 mb-section-gap">
        {/* Back navigation & Header */}
        <header className="mb-section-gap max-w-3xl">
          <Link
            className={`inline-flex items-center text-primary hover:opacity-80 transition-opacity font-label-sm text-label-sm mb-stack-md group ${inlineFocusRingClass}`}
            to="/"
          >
            <span className="material-symbols-outlined mr-2 text-[16px] transition-transform group-hover:-translate-x-1" aria-hidden="true">
              arrow_back
            </span>
            Back to Engineering
          </Link>
          <h1 className="font-display-xl text-display-xl text-on-surface mb-stack-lg leading-tight">
            Video Production &amp; <br /> Strategic Leadership
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed text-secondary">
            Before transitioning to software engineering, I founded and led the
            internal Video Production unit at Holiday Extras. Operating like a
            startup within a large organization, I managed strategy, budgeting,
            and external partners while scaling the team to include specialists
            in cinematography and editing.
          </p>
        </header>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Strategic Impact Card */}
          <section 
            aria-label="Strategic Impact"
            className="md:col-span-4 bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-8 ambient-shadow flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 bg-surface-container flex items-center justify-center rounded-full mb-6" aria-hidden="true">
                <span className="material-symbols-outlined text-primary text-[24px]">
                  strategy
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-4">
                Strategic Impact
              </h3>
              <ul className="space-y-4 font-body-md text-body-md text-on-surface-variant text-secondary">
                {strategicImpacts.map((impact, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="material-symbols-outlined text-primary mr-3 text-[20px] mt-0.5" aria-hidden="true">
                      check_circle
                    </span>
                    {impact}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Featured Video 1 */}
          <a 
            href="#"
            aria-label={`Play video: ${videos[0].title}`}
            className={`md:col-span-8 bg-surface-container-lowest border border-outline-variant/30 rounded-lg ambient-shadow overflow-hidden group cursor-pointer relative block ${focusRingClass}`}
          >
            <div className="aspect-video w-full bg-surface-variant relative">
              <img
                alt=""
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                src={videos[0].image}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors duration-300">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span
                    className="material-symbols-outlined text-primary text-[32px] ml-1"
                    data-weight="fill"
                    aria-hidden="true"
                  >
                    play_arrow
                  </span>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="inline-block bg-surface-container text-on-surface-variant font-label-sm text-label-sm px-3 py-1 rounded-full mb-3">
                {videos[0].channel}
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2">
                {videos[0].title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-secondary">
                {videos[0].description}
              </p>
            </div>
          </a>

          {/* Featured Video 2 */}
          <a 
            href="#"
            aria-label={`Play video: ${videos[1].title}`}
            className={`md:col-span-8 bg-surface-container-lowest border border-outline-variant/30 rounded-lg ambient-shadow overflow-hidden group cursor-pointer relative block ${focusRingClass}`}
          >
            <div className="aspect-video w-full bg-surface-variant relative">
              <img
                alt=""
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                src={videos[1].image}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors duration-300">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span
                    className="material-symbols-outlined text-primary text-[32px] ml-1"
                    data-weight="fill"
                    aria-hidden="true"
                  >
                    play_arrow
                  </span>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="inline-block bg-surface-container text-on-surface-variant font-label-sm text-label-sm px-3 py-1 rounded-full mb-3">
                {videos[1].channel}
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2">
                {videos[1].title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-secondary">
                {videos[1].description}
              </p>
            </div>
          </a>

          {/* Visual Storytelling Card */}
          <article 
            aria-label="Visual Storytelling Context"
            className="md:col-span-4 bg-surface-container-lowest border border-outline-variant/30 rounded-lg overflow-hidden ambient-shadow flex flex-col"
          >
            <div className="h-48 w-full bg-surface-variant relative">
              <img
                alt=""
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida/ADBb0uijTmxE0nlOfuH6hqY2MwCOKp635EYuz4k1e-6PAtLWHBOdOIU3XvhUSEgDbnWA4o_EMZ9PZNaFM2msx6fXhDUmxioMCpqiqkh9uJTCRjRIEqug2sTxqnYiwpoXhs269L091AjZFDY9tOMNp67vm7newbfNms7CNhrmjz01vG58zD_FodmtNs0a89xlk8-v6tIf6Ppwkgrp9TBl-LkjOmK74UlSCm3gKJAlNy6Rctk-vC1P1vzGDF0YNCQ"
              />
            </div>
            <div className="p-8 flex-grow flex flex-col justify-center">
              <h4 className="font-headline-md text-headline-md text-on-surface mb-3">
                Visual Storytelling
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant text-secondary">
                Leveraging cinematography to drive business metrics and user
                engagement across digital platforms.
              </p>
            </div>
          </article>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-stack-lg px-gutter flex flex-col md:flex-row justify-between items-center max-w-container-max mx-auto mt-section-gap border-t border-outline-variant/20 bg-surface">
        <div className="font-headline-md text-headline-md font-bold text-on-surface mb-4 md:mb-0">
          JC.DEV
        </div>
        <div className="text-on-surface-variant font-body-md text-body-md mb-4 md:mb-0 text-center md:text-left text-secondary">
          © 2024 Jonathan Clarke. Built with{" "}
          <Link to="/about-portfolio" className="underline hover:text-primary transition-colors">
            precision
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
          <a
            className={`text-on-surface-variant font-label-sm text-label-sm hover:text-primary transition-colors transition-opacity hover:opacity-80 text-secondary ${inlineFocusRingClass}`}
            href="#"
          >
            Source Code
          </a>
        </div>
      </footer>
    </>
  );
}
