import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: { DEFAULT: "#00FFE5", glow: "rgba(0,255,229,0.18)" },
        purple: { DEFAULT: "#B44FFF", glow: "rgba(180,79,255,0.18)" },
        gold: { DEFAULT: "#FFB830", glow: "rgba(255,184,48,0.18)" },
        bg: "#050811",
        navy: "#0C1428",
      },
      fontFamily: {
        bebas: ["var(--font-bebas)", "sans-serif"],
        syne: ["var(--font-syne)", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],
      },
      animation: {
        "orb-float": "orbFloat 8s ease-in-out infinite",
        "hero-float": "heroFloat 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "fade-up": "fadeUp 0.7s cubic-bezier(.25,.46,.45,.94) forwards",
        "marquee": "marquee 25s linear infinite",
      },
      keyframes: {
        orbFloat: {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(30px,-30px) scale(1.05)" },
        },
        heroFloat: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGlow: {
          "0%,100%": { boxShadow: "0 0 40px rgba(0,255,229,0.3),0 20px 60px rgba(0,0,0,0.4)" },
          "50%": { boxShadow: "0 0 70px rgba(0,255,229,0.5),0 20px 60px rgba(0,0,0,0.4)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
