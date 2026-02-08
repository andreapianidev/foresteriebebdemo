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
        forest: {
          50: "#f0f7f0",
          100: "#d8ecd8",
          200: "#b3d9b3",
          300: "#7fbf7f",
          400: "#4a9f4a",
          500: "#2d7d2d",
          600: "#236623",
          700: "#1a4d1a",
          800: "#133613",
          900: "#0d260d",
        },
        earth: {
          50: "#faf6f1",
          100: "#f0e6d6",
          200: "#e0ccad",
          300: "#c9a87a",
          400: "#b38a52",
          500: "#9a7040",
          600: "#7d5a33",
          700: "#614527",
          800: "#48331d",
          900: "#332514",
        },
        warm: {
          50: "#fefcf8",
          100: "#fdf8ed",
          200: "#faf0d6",
          300: "#f5e3b3",
          400: "#edd28a",
          500: "#e3be60",
          600: "#d4a63a",
          700: "#b08a2e",
          800: "#8a6c24",
          900: "#6b541c",
        },
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
