import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./lib/**/*.{ts,tsx,js,jsx}",
    "./pages/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "var(--color-navy)",
        "navy-dark": "var(--color-navy-dark)",
        bg: "var(--color-bg)",
        "accent-light": "var(--color-accent-light)",
      },
      boxShadow: {
        neubrutal: "6px 6px 0 rgba(41,69,162,0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
