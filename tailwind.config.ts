import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        milk: "#F7F1EA",
        graphite: "#252326",
        softGraphite: "#3A363D",
        fuchsia: "#D91E8F",
        darkFuchsia: "#C2187A",
        blush: "#F7D7EA",
        lavender: "#E8E3EE",
      },
      boxShadow: {
        glow: "0 0 60px rgba(217, 30, 143, 0.28)",
        card: "0 24px 70px rgba(37, 35, 38, 0.12)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};

export default config;
