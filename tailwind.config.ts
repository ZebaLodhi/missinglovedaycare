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
          DEFAULT: "#2F6C8F",
          light: "#3E8AB4",
          dark: "#215472",
        },
        // "MISSING LOVE" arc blue — brighter secondary blue
        sky: {
          DEFAULT: "#4FB8D6",
          light: "#8AD6EA",
          dark: "#21748C",
        },
        // Brand-sheet teal — buttons, highlights, pattern
        teal: {
          DEFAULT: "#2BD9C9",
          light: "#7FF0E4",
          dark: "#0A8177",
        },
        // The heart — primary call-to-action colour
        coral: {
          DEFAULT: "#EE5236",
          light: "#FF8168",
          dark: "#C93A1F",
        },
        // Sunny accents — stars, the yellow dress
        sun: {
          DEFAULT: "#FFB020",
          light: "#FFD070",
          dark: "#9C6200",
        },
        // Paper backgrounds from the logo badge
        cream: {
          DEFAULT: "#FFF4DA",
          deep: "#FFEFCE",
          soft: "#FFFDF7",
        },
        ink: {
          DEFAULT: "#22333D",
          soft: "#4C5F68",
        },
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Poppins", "Arial", "sans-serif"],
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
