"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface ReadMoreToggleProps {
  short: React.ReactNode;
  long: React.ReactNode;
  readMoreLabel?: string;
  readLessLabel?: string;
  className?: string;
}

export function ReadMoreToggle({
  short,
  long,
  readMoreLabel = "Read more",
  readLessLabel = "Show less",
  className,
}: ReadMoreToggleProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={className}>
      <div>{short}</div>
      <div
        style={{
          display: "grid",
          gridTemplateRows: expanded ? "1fr" : "0fr",
          transition: "grid-template-rows 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div className="overflow-hidden">
          <div className="mt-4">{long}</div>
        </div>
      </div>
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-4 inline-flex items-center gap-1.5 text-orange-500 hover:text-orange-600 font-semibold text-sm transition-colors"
        aria-expanded={expanded}
      >
        {expanded ? readLessLabel : readMoreLabel}
        <ChevronDownIcon
          className={cn(
            "h-4 w-4 transition-transform duration-200",
            expanded && "rotate-180"
          )}
        />
      </button>
    </div>
  );
}
