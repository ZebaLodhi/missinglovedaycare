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
        // Deep teal-navy from the reference headline — headings and body accents
        navy: {
          DEFAULT: "#0D4856",
          light: "#1D6274",
          dark: "#08333E",
        },
        // Soft blue, kept for programme accents
        sky: {
          DEFAULT: "#8FC9DC",
          light: "#CDE9F2",
          dark: "#2A7893",
        },
        // Mint — blobs, icon badges, the pattern of dots
        teal: {
          DEFAULT: "#7FD4C4",
          light: "#D6F1E8",
          dark: "#2F7D74",
        },
        // Coral — the heart, primary buttons, the highlighted words
        coral: {
          DEFAULT: "#F4584F",
          light: "#FBA79F",
          dark: "#C8362D",
        },
        // Warm amber — stars, sparkles, the yellow dress
        sun: {
          DEFAULT: "#FCC477",
          light: "#FDE5C2",
          dark: "#96620B",
        },
        // Warm paper
        cream: {
          DEFAULT: "#FBF8EE",
          deep: "#F6F0E0",
          soft: "#FFFDF8",
        },
        ink: {
          DEFAULT: "#25424B",
          soft: "#55707A",
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", "Nunito", "system-ui", "sans-serif"],
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
