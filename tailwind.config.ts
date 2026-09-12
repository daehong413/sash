import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#14161A",
        paper: "#FFFFFF",
        cloud: "#F5F7FA",
        muted: "#6B7280",
        primary: "#1F5FD1",
        "primary-dark": "#1A4FB0",
        mint: "#00C2A8",
        line: "#E9EBEF",
      },
      fontFamily: {
        sans: ["var(--font-pretendard)", "Pretendard", "-apple-system", "sans-serif"],
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
