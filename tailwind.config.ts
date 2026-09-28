import type { Config } from "tailwindcss";

/**
 * Brand palette sampled from the Missing Love Daycare logo
 * (public/brand/missing-love-daycare-logo.jpg).
 */
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // "DAYCARE" wordmark blue — headings, navigation, footer
        navy: {
          DEFAULT: "#35637D",
          light: "#47788F",
          dark: "#274B60",
        },
        // "MISSING LOVE" arc blue — softer secondary blue
        sky: {
          DEFAULT: "#629AA9",
          light: "#8FBAC5",
          dark: "#4A7E8D",
        },
        // Brand-sheet teal — buttons, highlights, pattern
        teal: {
          DEFAULT: "#4FD1C5",
          light: "#7FE0D7",
          dark: "#36AFA4",
        },
        // The heart — primary call-to-action colour
        coral: {
          DEFAULT: "#F88A71",
          light: "#FCA795",
          dark: "#E06A50",
        },
        // Sunny accents — stars, the yellow dress
        sun: {
          DEFAULT: "#EBA452",
          light: "#F6C489",
          dark: "#CF8836",
        },
        // Paper backgrounds from the logo badge
        cream: {
          DEFAULT: "#FDF5E0",
          deep: "#F7F3E8",
          soft: "#FFFCF5",
        },
        ink: {
          DEFAULT: "#2A3B45",
          soft: "#55686F",
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", "Nunito", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        display: ["var(--font-display)", "Baloo 2", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2.5rem",
        blob: "48% 52% 55% 45% / 52% 45% 55% 48%",
      },
      boxShadow: {
        soft: "0 4px 20px -6px rgba(53, 99, 125, 0.18)",
        lift: "0 18px 45px -22px rgba(53, 99, 125, 0.45)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
