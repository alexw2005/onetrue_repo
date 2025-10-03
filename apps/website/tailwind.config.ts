import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",

    "../../packages/ui/src/**/*.{ts,tsx}",
  ],
  theme: { extend: {} },
  plugins: [
    // add if you use them:
    // require("tailwindcss-animate"),
    // require("@tailwindcss/forms"),
    // require("@tailwindcss/typography"),
  ],
} satisfies Config;