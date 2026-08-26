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
        ink: "var(--color-ink)",
        line: "var(--color-line)",
        surface: "var(--color-surface)",
        muted: "var(--color-muted)",
        "swiss-red": "var(--color-swiss-red)",
      },
      fontFamily: {
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        neubrutal: "6px 6px 0 rgba(41,69,162,0.12)",
        bento: "0 1px 2px rgba(23,40,80,0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
