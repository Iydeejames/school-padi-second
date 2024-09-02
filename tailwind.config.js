/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        grandis: ["Grandis", "sans-serif"],
      },
      colors: {
        primary: "#027FFF",
        customGreen: "#0F973D",
        customRed: "#D42620",
        customYellow: "#3599FF",
      },
    },
  },
  plugins: [],
};

