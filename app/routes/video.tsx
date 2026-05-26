import type { Route } from "./+types/video";
import { Link } from "react-router";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Video Production & Strategic Leadership - JC.DEV" },
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
    title: "Tokyo Travel Guide | Travel better in JAPAN!",
    channel: "Holiday Extras Travel Guides",
    description:
      "A comprehensive guide to navigating Tokyo, covering transport, culture, local food, and smart travel tips.",
    image: "https://img.youtube.com/vi/bC9m_id_Yds/maxresdefault.jpg",
    url: "https://youtu.be/bC9m_id_Yds?si=9jYYPx0CHTWT9ueL",
  },
  {
    title: "48 Hours in Budapest | ULTIMATE BUDAPEST TRAVEL GUIDE",
    channel: "Holiday Extras Travel Guides",
    description:
      "Maximize a weekend trip to Budapest with this ultimate itinerary mapping out thermal baths, ruin bars, and historic sights.",
    image: "https://img.youtube.com/vi/_NfdBrDQF6k/maxresdefault.jpg",
    url: "https://youtu.be/_NfdBrDQF6k?si=onxw7y8bdbYKEI5B",
  },
  {
    title: "The most BEAUTIFUL country on Earth? | THAILAND cinematic travel",
    channel: "Holiday Extras Travel Guides",
    description:
      "A cinematic visual exploration of Thailand, showcasing stunning beaches, lush landscapes, and deep cultural heritage.",
    image: "https://img.youtube.com/vi/RwfTT9CPvi0/maxresdefault.jpg",
    url: "https://youtu.be/RwfTT9CPvi0?si=J3FS1FeZb3APPqT8",
  },
];

export default function Video() {
  const focusRingClass =
    "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none rounded-lg";
  const inlineFocusRingClass =
    "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none rounded";

  return (
    <>
      <NavBar />

      {/* Main Content */}
      <main className="max-w-container-max mx-auto px-gutter mt-32 mb-section-gap">
        {/* Back navigation & Header */}
        <header className="mb-16 max-w-3xl">
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
          <h1 className="font-display-xl text-display-xl text-on-surface mb-stack-lg leading-tight">
            Video Production &amp; <br /> Strategic Leadership
          </h1>
          <p className="font-body-lg text-body-lg text-secondary leading-relaxed">
            Before transitioning to software engineering, I founded and led the internal Video
            Production unit at Holiday Extras. Operating like a startup within a large
            organization, I managed strategy, budgeting, and external partners while scaling the
            team to include specialists in cinematography and editing.
          </p>
        </header>

        {/* Sidebar & Video Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left Column: Context Cards (4 cols) */}
          <div className="md:col-span-4 space-y-8">
            {/* Strategic Impact Card */}
            <section
              aria-label="Strategic Impact"
              className="bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-8 ambient-shadow flex flex-col justify-between"
            >
              <div>
                <div
                  className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-xl mb-6 text-primary"
                  aria-hidden="true"
                >
                  <span className="material-symbols-outlined text-[28px]">strategy</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-4">
                  Strategic Impact
                </h3>
                <ul className="space-y-4 font-body-md text-body-md text-secondary">
                  {strategicImpacts.map((impact, idx) => (
                    <li key={idx} className="flex items-start">
                      <span
                        className="material-symbols-outlined text-primary mr-3 text-[20px] mt-0.5"
                        aria-hidden="true"
                      >
                        check_circle
                      </span>
                      {impact}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Visual Storytelling Card */}
            <article
              aria-label="Visual Storytelling Context"
              className="bg-surface-container-lowest border border-outline-variant/30 rounded-lg overflow-hidden ambient-shadow flex flex-col"
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
                <p className="font-body-md text-body-md text-secondary leading-relaxed">
                  Leveraging cinematography to drive business metrics and user engagement across
                  digital platforms.
                </p>
              </div>
            </article>
          </div>

          {/* Right Column: Featured Videos List (8 cols) */}
          <div className="md:col-span-8 space-y-8">
            {videos.map((video, idx) => (
              <a
                key={idx}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Play video: ${video.title} on YouTube`}
                className={`bg-surface-container-lowest border border-outline-variant/30 rounded-lg ambient-shadow overflow-hidden group cursor-pointer relative block transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 ${focusRingClass}`}
              >
                <div className="aspect-video w-full bg-surface-variant relative">
                  <img
                    alt=""
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                    src={video.image}
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
                    {video.channel}
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-2 group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  <p className="font-body-md text-body-md text-secondary leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>

      <Footer precisionText="precision" />
    </>
  );
}
