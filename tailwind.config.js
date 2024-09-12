/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      },
      colors: {
        "gray-dark": "#1B1D1F",
        "gray-light": "#6F757C",
        black: "#111315",
        "green-light": "#BEE3CC",
        white: "#FEF7EE",
        yellow: "#F6C768",
        red: "#ED735D",
      },
    },
  },
  plugins: [],
};
