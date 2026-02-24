import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand primary colours
        orange: {
          DEFAULT: "#ff7900",
          50: "#fff5e6",
          100: "#ffe5bf",
          200: "#ffcc80",
          300: "#ffb347",
          400: "#ff9a1a",
          500: "#ff7900", // Brand Orange
          600: "#d96600",
          700: "#b35300",
        },
        blue: {
          DEFAULT: "#1e4cec",
          50: "#eef1fd",
          100: "#cdd5f9",
          200: "#9bb1f3",
          300: "#698ced",
          400: "#3768e8",
          500: "#1e4cec", // Brand Blue
          600: "#1740c9",
          700: "#1133a6",
        },
        // Brand secondary colours
        darkGreen: {
          DEFAULT: "#495f18",
          50: "#f0f3e8",
          100: "#d3ddb8",
          200: "#b6c788",
          300: "#99b158",
          400: "#7c9b28",
          500: "#495f18",
        },
        lightGreen: {
          DEFAULT: "#9aac6e",
          50: "#f4f6ec",
          100: "#dfe6c9",
          200: "#c9d6a6",
          300: "#b4c683",
          400: "#9aac6e",
          500: "#7d8f58",
        },
        grey: {
          DEFAULT: "#e2e5de",
          50: "#f8f9f7",
          100: "#e2e5de", // Brand Grey
          200: "#ccd0c7",
          300: "#b6bcb0",
        },
        // Keep sand for very light backgrounds
        sand: {
          50: "#fafaf9",
          100: "#f5f5f4",
        },
      },
      fontFamily: {
        sans: ["'Inter'", "system-ui", "sans-serif"],
        display: ["'Kit Rounded'", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
