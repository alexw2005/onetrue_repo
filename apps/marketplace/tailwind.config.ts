import type { Config } from "tailwindcss";
// If you make a shared preset later, import it and add to `presets: []`
export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    // include the shared UI package so class names there are picked up:
    "../../packages/ui/**/*.{ts,tsx}",
  ],
  theme: { extend: {} },
  plugins: [],
} satisfies Config;
