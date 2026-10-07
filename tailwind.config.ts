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
        brand: {
          primary: "#005a7e",
          secondary: "#002737",
          light: "#e2f3fa",
          accent: "#9ac93c",
          accentHover: "#689213",
          lightAccent: "#e8f7c9",
          grayBg: "#f7f7f7",
          dark: "#333333",
        }
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
export default config;
