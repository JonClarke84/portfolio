import { useState } from "react";
import { Link, useLocation } from "react-router";

export default function NavBar() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isVideoPage = location.pathname === "/video";
  const isExperiencePage = location.pathname === "/experience";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Dynamic anchor links depending on whether we are on the homepage
  const workHref = isHomePage ? "#work" : "/#work";
  const contactHref = isHomePage ? "#contact" : "/#contact";

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
          aria-label="jonathanclarke.dev Portfolio Home"
          className={`font-headline-md text-headline-md font-bold text-on-surface ${focusRingClass}`}
        >
          jonathanclarke.dev
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-stack-lg">
          <a
            className={`font-body-md text-body-md text-secondary hover:text-primary transition-colors ${focusRingClass}`}
            href={workHref}
          >
            Work
          </a>

          {isExperiencePage ? (
            <a
              className={`font-body-md text-body-md text-primary font-bold border-b-2 border-primary hover:text-primary transition-colors pb-1 ${focusRingClass}`}
              href="#"
              aria-current="page"
            >
              Experience
            </a>
          ) : (
            <Link
              className={`font-body-md text-body-md text-secondary hover:text-primary transition-colors ${focusRingClass}`}
              to="/experience"
            >
              Experience
            </Link>
          )}
          
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

          {isExperiencePage ? (
            <a
              className={`font-body-md text-body-md text-primary font-bold border-b-2 border-primary hover:text-primary transition-colors py-1 self-start ${focusRingClass}`}
              href="#"
              aria-current="page"
              onClick={() => setMobileMenuOpen(false)}
            >
              Experience
            </a>
          ) : (
            <Link
              className={`font-body-md text-body-md text-secondary hover:text-primary transition-colors py-1 ${focusRingClass}`}
              to="/experience"
              onClick={() => setMobileMenuOpen(false)}
            >
              Experience
            </Link>
          )}
          
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
        </div>
      )}
    </nav>
  );
}
