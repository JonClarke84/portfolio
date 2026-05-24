import { useState } from "react";
import { Link, useLocation } from "react-router";

export default function NavBar() {
  const location = useLocation();
  const isVideoPage = location.pathname === "/video";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Dynamic links depending on whether we are on the video page
  const workHref = isVideoPage ? "/#work" : "#work";
  const stackHref = isVideoPage ? "/#stack" : "#stack";
  const experienceHref = isVideoPage ? "/#experience" : "#experience";
  const contactHref = isVideoPage ? "/#contact" : "#contact";

  // Shared focus style class
  const focusRingClass = "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none rounded";

  return (
    <nav 
      aria-label="Main Navigation"
      className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 shadow-sm transition-all duration-300 ease-in-out"
    >
      <div className="flex justify-between items-center h-16 px-gutter max-w-container-max mx-auto">
        <Link 
          to="/" 
          aria-label="JC.DEV Portfolio Home"
          className={`font-headline-md text-headline-md font-bold text-on-surface ${focusRingClass}`}
        >
          JC.DEV
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-stack-lg">
          <a
            className={`font-body-md text-body-md text-secondary hover:text-primary transition-colors ${focusRingClass}`}
            href={workHref}
          >
            Work
          </a>
          <a
            className={`font-body-md text-body-md text-secondary hover:text-primary transition-colors ${focusRingClass}`}
            href={stackHref}
          >
            Stack
          </a>
          <a
            className={`font-body-md text-body-md text-secondary hover:text-primary transition-colors ${focusRingClass}`}
            href={experienceHref}
          >
            Experience
          </a>
          
          {isVideoPage ? (
            <a
              className={`font-body-md text-body-md text-primary font-bold border-b-2 border-primary hover:text-primary transition-colors pb-1 ${focusRingClass}`}
              href="#"
              aria-current="page"
            >
              Video Production
            </a>
          ) : (
            <Link
              className={`font-body-md text-body-md text-secondary hover:text-primary transition-colors ${focusRingClass}`}
              to="/video"
            >
              Video Production
            </Link>
          )}

          <a
            className={`font-body-md text-body-md text-secondary hover:text-primary transition-colors ${focusRingClass}`}
            href={contactHref}
          >
            Contact
          </a>
          
          <button className={`bg-primary-container text-on-primary-container px-6 py-2 rounded-lg font-button text-button hover:opacity-90 transition-opacity ml-4 ${focusRingClass}`}>
            Resume
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden text-on-surface p-2 ${focusRingClass}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? "Close main menu" : "Open main menu"}
        >
          <span className="material-symbols-outlined" aria-hidden="true">
            {mobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div 
          id="mobile-menu"
          className="md:hidden bg-surface border-b border-outline-variant/30 px-gutter py-4 flex flex-col gap-4"
        >
          <a
            className={`font-body-md text-body-md text-secondary hover:text-primary transition-colors py-1 ${focusRingClass}`}
            href={workHref}
            onClick={() => setMobileMenuOpen(false)}
          >
            Work
          </a>
          <a
            className={`font-body-md text-body-md text-secondary hover:text-primary transition-colors py-1 ${focusRingClass}`}
            href={stackHref}
            onClick={() => setMobileMenuOpen(false)}
          >
            Stack
          </a>
          <a
            className={`font-body-md text-body-md text-secondary hover:text-primary transition-colors py-1 ${focusRingClass}`}
            href={experienceHref}
            onClick={() => setMobileMenuOpen(false)}
          >
            Experience
          </a>
          
          {isVideoPage ? (
            <a
              className={`font-body-md text-body-md text-primary font-bold border-b-2 border-primary hover:text-primary transition-colors py-1 self-start ${focusRingClass}`}
              href="#"
              aria-current="page"
              onClick={() => setMobileMenuOpen(false)}
            >
              Video Production
            </a>
          ) : (
            <Link
              className={`font-body-md text-body-md text-secondary hover:text-primary transition-colors py-1 self-start ${focusRingClass}`}
              to="/video"
              onClick={() => setMobileMenuOpen(false)}
            >
              Video Production
            </Link>
          )}

          <a
            className={`font-body-md text-body-md text-secondary hover:text-primary transition-colors py-1 ${focusRingClass}`}
            href={contactHref}
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </a>
          <button className={`bg-primary-container text-on-primary-container px-6 py-2 rounded-lg font-button text-button hover:opacity-90 transition-opacity w-full ${focusRingClass}`}>
            Resume
          </button>
        </div>
      )}
    </nav>
  );
}
