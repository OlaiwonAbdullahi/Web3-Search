/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        Agdasima: ["Agdasima", "serif"],
      },
      colors: {
        primary: "#0F1A1A",
        secondary: "#07F0FF",
        text: "#CDCDCD",
      },
    },
  },
  plugins: [],
};
