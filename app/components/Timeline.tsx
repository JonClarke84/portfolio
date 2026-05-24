interface TimelineItemProps {
  role: string;
  company: string;
  period: string;
  isCurrent?: boolean;
  bullets?: string[];
  description?: string;
}

interface TimelineProps {
  items: TimelineItemProps[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <ol 
      aria-label="Professional Journey Timeline"
      className="space-y-12"
    >
      {items.map((item, idx) => {
        const dotBgClass = item.isCurrent ? "bg-primary" : "bg-outline-variant";
        return (
          <li
            key={idx}
            className="relative pl-8 border-l border-outline-variant/30"
          >
            <div
              className={`absolute -left-[5px] top-2 w-[10px] h-[10px] rounded-full ${dotBgClass}`}
              aria-hidden="true"
            ></div>
            <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
              <h3 className="font-headline-md text-headline-md text-xl">
                {item.role}
                {item.isCurrent && (
                  <span className="sr-only"> (Current Role)</span>
                )}
              </h3>
              <span
                className={`font-label-sm text-label-sm ${
                  item.isCurrent ? "text-primary font-bold" : "text-secondary"
                }`}
              >
                {item.period}
              </span>
            </div>
            <p className="font-headline-md text-headline-md text-lg text-secondary mb-4">
              {item.company}
            </p>
            {item.description && (
              <p className="text-secondary font-body-md mb-4">
                {item.description}
              </p>
            )}
            {item.bullets && item.bullets.length > 0 && (
              <ul className="space-y-3 text-secondary font-body-md list-disc list-inside">
                {item.bullets.map((bullet, bIdx) => (
                  <li key={bIdx}>{bullet}</li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ol>
  );
}
