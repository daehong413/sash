import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "var(--color-ink)",
        paper: "var(--color-paper)",
        cloud: "var(--color-cloud)",
        muted: "var(--color-muted)",
        primary: "var(--color-primary)",
        "primary-dark": "var(--color-primary-dark)",
        mint: "var(--color-accent)",
        line: "var(--color-line)",
        brass: "var(--color-primary)",
        "brass-dark": "var(--color-primary-dark)",
        graphite: "var(--color-muted)",
      },
      fontFamily: {
        sans: [
          "var(--font-pretendard)",
          "Pretendard",
          "-apple-system",
          "sans-serif",
        ],
      },
      maxWidth: {
        content: "1180px",
      },
      borderRadius: {
        xl2: "20px",
        pill: "999px",
      },
      letterSpacing: {
        tight2: "-0.02em",
      },
      boxShadow: {
        soft: "0 8px 24px rgba(20, 22, 26, 0.06)",
        card: "0 2px 10px rgba(20, 22, 26, 0.05)",
      },
    },
  },
  plugins: [],
};
export default config;
