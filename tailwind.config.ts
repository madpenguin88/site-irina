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
        // Ava Brand Colors - Soft & Earthy Palette
        cream: "#FAF7F4",
        beige: "#E8DED3",
        "dusty-rose": "#D4A5A5",
        "soft-pink": "#F2E5E5",
        "warm-taupe": "#C9B8A8",
        charcoal: "#2C2C2C",
        "warm-gray": "#5A5A5A",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Open Sans", "sans-serif"],
        serif: ["var(--font-serif)", "The Seasons", "Cormorant Garamond", "serif"],
        script: ["var(--font-script)", "Beautifully Delicious", "cursive"],
      },
      letterSpacing: {
        wider: "0.02em",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
