import { cn } from "@/lib/utils";

interface LogoProps {
  /** Colour variant of the logo */
  variant?: "orange" | "blue" | "white";
  /** Show just the mark, or mark + wordmark */
  showWordmark?: boolean;
  /** Show the "boat delivery" sub-tagline beneath the wordmark */
  showTagline?: boolean;
  className?: string;
  markSize?: number;
}

/**
 * Orange Dolphins brand logo.
 * The dolphin logomark is two dolphins in a circular yin-yang flow (primary orange).
 * Wordmark: "ORANGE DOLPHINS" bold uppercase, tagline: "boat delivery" in blue.
 */
export function Logo({
  variant = "orange",
  showWordmark = true,
  showTagline = false,
  className,
  markSize = 40,
}: LogoProps) {
  const markColor =
    variant === "blue" ? "#1e4cec" : variant === "white" ? "#ffffff" : "#ff7900";

  const wordmarkColor =
    variant === "white" ? "#ffffff" : "#ff7900";

  const taglineColor =
    variant === "white" ? "#ffffff" : "#1e4cec";

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      {/* Dolphin logomark — two dolphins in circular flow */}
      <svg
        width={markSize}
        height={markSize}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Top dolphin — faces right */}
        <path
          d="M52 15 C70 12, 88 25, 85 42 C83 52, 75 57, 65 55 C58 54, 53 50, 50 44 C47 38, 48 30, 52 25 C54 21, 57 18, 60 17 C56 15, 53 14, 52 15 Z"
          fill={markColor}
        />
        {/* Top dolphin body */}
        <path
          d="M50 20 C62 16, 82 22, 84 40 C86 54, 74 62, 62 60 C54 58, 48 52, 46 44 C44 36, 46 26, 50 20 Z"
          fill={markColor}
        />
        {/* Top dolphin tail */}
        <path
          d="M84 38 C90 32, 96 28, 94 35 C92 40, 88 42, 84 40 Z"
          fill={markColor}
        />
        <path
          d="M84 42 C90 46, 95 50, 92 44 C89 40, 86 40, 84 42 Z"
          fill={markColor}
        />
        {/* Top dolphin fin */}
        <path
          d="M65 22 C72 16, 80 18, 78 25 C76 28, 70 26, 65 22 Z"
          fill={markColor}
        />
        {/* Top dolphin eye */}
        <circle cx="70" cy="35" r="3" fill="white" />

        {/* Bottom dolphin — faces left (mirrored) */}
        <path
          d="M50 80 C38 84, 18 75, 16 58 C14 46, 26 38, 38 40 C46 42, 52 48, 54 56 C56 62, 54 70, 50 75 C48 79, 45 82, 42 83 C46 85, 49 86, 50 80 Z"
          fill={markColor}
        />
        {/* Bottom dolphin body */}
        <path
          d="M50 80 C38 84, 18 78, 16 60 C14 46, 26 38, 38 40 C46 42, 52 48, 54 56 C56 64, 54 74, 50 80 Z"
          fill={markColor}
        />
        {/* Bottom dolphin tail */}
        <path
          d="M16 62 C10 68, 4 72, 6 65 C8 60, 12 58, 16 60 Z"
          fill={markColor}
        />
        <path
          d="M16 58 C10 54, 5 50, 8 56 C11 60, 14 60, 16 58 Z"
          fill={markColor}
        />
        {/* Bottom dolphin fin */}
        <path
          d="M35 78 C28 84, 20 82, 22 75 C24 72, 30 74, 35 78 Z"
          fill={markColor}
        />
        {/* Bottom dolphin eye */}
        <circle cx="30" cy="65" r="3" fill="white" />
      </svg>

      {showWordmark && (
        <span className="leading-none">
          <span
            className="block font-display font-extrabold uppercase tracking-wider text-[1em]"
            style={{ color: wordmarkColor, letterSpacing: "0.05em" }}
          >
            Orange Dolphins
          </span>
          {showTagline && (
            <span
              className="block font-display font-semibold text-[0.55em] mt-0.5"
              style={{ color: taglineColor }}
            >
              boat delivery
            </span>
          )}
        </span>
      )}
    </span>
  );
}
