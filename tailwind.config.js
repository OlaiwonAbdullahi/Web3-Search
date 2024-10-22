/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        Agdasima: ["Agdasima", "serif"],
        Montserrat: ["Montserrat", "serif"],
      },
      colors: {
        primary: "#0F1A1A",
        primary1: "#021110",
        primaryHover: "#022E2B",
        secondary: "#07F0FF",
        text: "#CDCDCD",
      },
    },
  },
  plugins: [],
};
