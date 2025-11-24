import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0F172A",
        textPrimary: "#E2E8F0",
        textSecondary: "#475569",
        white: "#FFFFFF",
        purple: "#6B21A8",
        purpleLight: "#F3E8FF",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      screens: {
        mobile: "393px",
        desktop: "1440px",
      },
      maxWidth: {
        desktop: "1440px",
        mobile: "393px",
      },
    },
  },
  plugins: [],
};
export default config;

