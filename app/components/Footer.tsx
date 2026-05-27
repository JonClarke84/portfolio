import { Link } from "react-router";

interface FooterProps {
  precisionText?: string;
}

export default function Footer({ precisionText = "technical precision" }: FooterProps) {
  const inlineFocusRingClass =
    "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none rounded";

  return (
    <footer className="bg-surface-container-low border-t border-outline-variant/20 py-stack-lg w-full mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center px-gutter max-w-container-max mx-auto">
        <div className="mb-8 md:mb-0">
          <Link
            className={`font-headline-md text-headline-md font-bold text-primary mb-2 block ${inlineFocusRingClass}`}
            to="/"
          >
            jonathanclarke.dev
          </Link>
          <p className="text-secondary-fixed-variant font-body-md max-w-xs">
            © 2024 Jonathan Clarke. Built with{" "}
            <Link to="/about-portfolio" className="underline hover:text-primary transition-colors">
              {precisionText}
            </Link>
            .
          </p>
        </div>
        <div className="flex gap-8">
          <a
            className={`text-secondary-fixed-variant hover:text-primary transition-colors opacity-80 hover:opacity-100 flex items-center gap-2 ${inlineFocusRingClass}`}
            href="#"
          >
            <span className="material-symbols-outlined text-xl" aria-hidden="true">
              share
            </span>{" "}
            GitHub
          </a>
          <a
            className={`text-secondary-fixed-variant hover:text-primary transition-colors opacity-80 hover:opacity-100 flex items-center gap-2 ${inlineFocusRingClass}`}
            href="#"
          >
            <span className="material-symbols-outlined text-xl" aria-hidden="true">
              link
            </span>{" "}
            LinkedIn
          </a>
          <a
            className={`text-secondary-fixed-variant hover:text-primary transition-colors opacity-80 hover:opacity-100 flex items-center gap-2 ${inlineFocusRingClass}`}
            href="#"
          >
            <span className="material-symbols-outlined text-xl" aria-hidden="true">
              podcasts
            </span>{" "}
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
