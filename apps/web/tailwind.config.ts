import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        smoke: {
          950: "#0a0a0f",
          900: "#0f0f1a",
          800: "#16162a",
          700: "#1e1e35",
        },
        brand: {
          gold: "#c9a84c",
          ember: "#e05c2a",
          teal: "#2dd4bf",
          violet: "#7c3aed",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      animation: {
        "gradient-shift": "gradient-shift 8s ease infinite",
        "fade-up": "fade-up 0.6s ease forwards",
        "tile-in": "tile-in 0.5s ease forwards",
      },
      keyframes: {
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "tile-in": {
          "0%": { opacity: "0", transform: "translateY(16px) scale(0.97)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
