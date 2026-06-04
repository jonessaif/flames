import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#070605",
        ink: "#0d0b09",
        espresso: "#1b120d",
        ember: "#f3a33c",
        gold: "#d8a84b",
        ivory: "#f7ead2",
        smoke: "#b8aa92",
        oasis: "#2f5f55"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Cormorant Garamond", "Georgia", "serif"]
      },
      boxShadow: {
        glow: "0 0 40px rgba(216, 168, 75, 0.18)",
        "gold-soft": "0 18px 60px rgba(243, 163, 60, 0.16)"
      },
      backgroundImage: {
        "premium-radial": "radial-gradient(circle at top left, rgba(216, 168, 75, 0.18), transparent 32%), radial-gradient(circle at bottom right, rgba(47, 95, 85, 0.16), transparent 28%)"
      }
    }
  },
  plugins: []
};

export default config;
