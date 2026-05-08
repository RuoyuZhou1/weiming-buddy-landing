import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Neo-Scholar Aesthetic palette
        paper: "#FAF6F0",      // 宣纸米 — global background (never pure white)
        ink: "#2B2D33",        // 砚台墨 — body text (not pure black)
        mist: "#EAECEF",       // 晨雾灰 — divider / skeleton
        cinnabar: {            // 燕园朱砂 — primary CTA / 匹配 / 情感强调
          DEFAULT: "#E85A5E",
          soft: "#F3898C",
          ink: "#C3464A",
        },
        lake: {                // 未名湖畔 — secondary / tags / links
          DEFAULT: "#7BB4D9",
          soft: "#A8CCE4",
          deep: "#5B9ABF",
        },
        amber: {               // 银杏琥珀 — badges / honor / campus easter-eggs
          DEFAULT: "#F4C453",
          soft: "#F7D784",
          deep: "#D9A93A",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "ui-serif", "Georgia", "serif"],
        serifcn: ["var(--font-noto-serif-sc)", "\"Songti SC\"", "\"SimSun\"", "serif"],
        sans: ["var(--font-manrope)", "ui-sans-serif", "system-ui", "sans-serif"],
        hand: ["var(--font-ma-shan)", "\"KaiTi\"", "cursive"],
      },
      boxShadow: {
        paper: "0 1px 0 rgba(43,45,51,0.04), 0 20px 48px -24px rgba(43,45,51,0.14)",
        phone: "0 2px 0 rgba(43,45,51,0.04), 0 40px 80px -30px rgba(43,45,51,0.25), 0 20px 40px -24px rgba(43,45,51,0.14)",
        chip: "0 1px 2px rgba(43,45,51,0.05), 0 6px 16px -10px rgba(43,45,51,0.18)",
      },
      borderRadius: {
        card: "22px",
      },
      keyframes: {
        breath: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%":      { transform: "scale(1.12)", opacity: ".85" },
        },
        halo: {
          "0%, 100%": { opacity: ".55", transform: "scale(1)" },
          "50%":      { opacity: "0",   transform: "scale(1.9)" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":      { transform: "translateY(-6px)" },
        },
      },
      animation: {
        breath: "breath 2.4s ease-in-out infinite",
        halo:   "halo 2.4s ease-in-out infinite",
        floaty: "floaty 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
