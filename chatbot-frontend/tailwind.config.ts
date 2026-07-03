import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0A",
        surface: "#121212",
        textPrimary: "#F8FAFC",
        textSecondary: "#94A3B8",
        accent: "#3B82F6",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;