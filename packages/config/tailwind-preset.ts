import type { Config } from "tailwindcss";
const preset: Partial<Config> = {
  theme: {
    extend: {
      borderRadius: { xl2: "1rem" },
      colors: { brand: { 600: "#0f172a" } },
    },
  },
  plugins: [],
};
export default preset;