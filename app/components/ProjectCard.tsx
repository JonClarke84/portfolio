import { useId } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  labels?: string[];
  featured?: boolean;
  caseStudyUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  labels = [],
  featured = false,
  caseStudyUrl,
}: ProjectCardProps) {
  const titleId = useId();
  const focusRingClass = "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none rounded";

  if (featured) {
    return (
      <article 
        aria-labelledby={titleId}
        className="work-card bg-surface-container-lowest border border-outline-variant/30 rounded-xl overflow-hidden flex flex-col md:flex-row h-full"
      >
        <div className="md:w-3/5 overflow-hidden relative min-h-[250px]">
          <img
            alt={title}
            src={image}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-primary/10 hover:bg-transparent transition-colors" aria-hidden="true"></div>
        </div>
        <div className="md:w-2/5 p-stack-lg flex flex-col justify-center">
          {labels.length > 0 && (
            <div className="flex gap-2 mb-4">
              {labels.map((label, idx) => (
                <span
                  key={idx}
                  className="bg-surface-variant text-on-surface-variant px-3 py-1 rounded-full font-label-sm text-label-sm"
                >
                  {label}
                </span>
              ))}
            </div>
          )}
          <h3 id={titleId} className="font-headline-md text-headline-md mb-4">{title}</h3>
          <p className="text-secondary font-body-md mb-6">{description}</p>
          <div className="flex flex-wrap gap-2 mb-8" aria-label="Technologies used">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="font-label-sm text-label-sm text-secondary-fixed-dim"
              >
                #{tag}
              </span>
            ))}
          </div>
          {caseStudyUrl && (
            <a
              className={`inline-flex items-center gap-2 text-primary font-button hover:underline ${focusRingClass}`}
              href={caseStudyUrl}
              aria-label={`Read case study for ${title}`}
            >
              Case Study{" "}
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                open_in_new
              </span>
            </a>
          )}
        </div>
      </article>
    );
  }

  return (
    <article 
      aria-labelledby={titleId}
      className="work-card bg-surface-container-lowest border border-outline-variant/30 rounded-xl overflow-hidden h-full flex flex-col"
    >
      <div className="aspect-video overflow-hidden relative">
        <img
          alt={title}
          src={image}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
        />
      </div>
      <div className="p-stack-lg flex-grow flex flex-col justify-between">
        <div>
          <h3 id={titleId} className="font-headline-md text-headline-md mb-2">{title}</h3>
          <p className="text-secondary font-body-md mb-4">{description}</p>
        </div>
        <div className="flex flex-wrap gap-2 mt-auto" aria-label="Technologies used">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="font-label-sm text-label-sm text-secondary-fixed-dim"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
