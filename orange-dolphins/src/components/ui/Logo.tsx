import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "orange" | "blue" | "white";
  showWordmark?: boolean;
  showTagline?: boolean;
  className?: string;
  markSize?: number;
}

/**
 * Orange Dolphins brand logo.
 * Logomark: two dolphins in a circular yin-yang flow.
 * Wordmark: "ORANGE DOLPHINS" in Kit Rounded Bold (orange).
 * Tagline:  "boat delivery" in Kit Rounded SemiBold (blue).
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

  const wordmarkColor = variant === "white" ? "#ffffff" : "#ff7900";
  const taglineColor  = variant === "white" ? "#ffffff" : "#1e4cec";
  const eyeColor      = variant === "blue" ? "#1e4cec" : "white";

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      {/* ── Dolphin logomark ───────────────────────────────────────
          Two dolphins in a circular yin-yang arrangement.
          The bottom dolphin is a 180° rotation of the top dolphin,
          both sharing the same path for exact symmetry.
      ─────────────────────────────────────────────────────────── */}
      <svg
        width={markSize}
        height={markSize}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Top dolphin — snout points right, tail lower-left */}
        <g fill={markColor}>
          {/* Main body */}
          <path d="
            M 170 68
            C 158 50, 138 26, 108 18
            C 84 12, 60 22, 46 44
            C 38 57, 33 70, 30 82
            L 18 68
            C 26 76, 33 82, 33 82
            L 16 98
            C 24 90, 33 86, 40 86
            C 50 98, 66 98, 80 90
            C 96 80, 114 70, 130 68
            C 146 66, 160 66, 170 68
            Z
          " />
          {/* Dorsal fin */}
          <path d="
            M 76 26
            C 74 8, 94 4, 102 14
            C 106 20, 102 27, 96 27
            Z
          " />
          {/* Eye */}
          <circle cx="152" cy="60" r="6" fill={eyeColor} />
        </g>

        {/* Bottom dolphin — 180° rotation of the top dolphin */}
        <g fill={markColor} transform="rotate(180, 100, 100)">
          <path d="
            M 170 68
            C 158 50, 138 26, 108 18
            C 84 12, 60 22, 46 44
            C 38 57, 33 70, 30 82
            L 18 68
            C 26 76, 33 82, 33 82
            L 16 98
            C 24 90, 33 86, 40 86
            C 50 98, 66 98, 80 90
            C 96 80, 114 70, 130 68
            C 146 66, 160 66, 170 68
            Z
          " />
          <path d="
            M 76 26
            C 74 8, 94 4, 102 14
            C 106 20, 102 27, 96 27
            Z
          " />
          <circle cx="152" cy="60" r="6" fill={eyeColor} />
        </g>
      </svg>

      {showWordmark && (
        <span className="leading-none">
          {/* Kit Rounded Bold — all-caps wordmark */}
          <span
            className="block font-display font-bold uppercase"
            style={{
              color: wordmarkColor,
              letterSpacing: "0.06em",
              fontSize: "1em",
              lineHeight: 1,
            }}
          >
            Orange Dolphins
          </span>
          {showTagline && (
            /* Kit Rounded SemiBold — lowercase tagline in blue */
            <span
              className="block font-display font-semibold"
              style={{
                color: taglineColor,
                fontSize: "0.58em",
                lineHeight: 1,
                marginTop: "0.3em",
                letterSpacing: "0.02em",
              }}
            >
              boat delivery
            </span>
          )}
        </span>
      )}
    </span>
  );
}
