/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  mode: "JIT",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          50: "#fefcec",
          100: "#fbf7cb",
          200: "#f6ed8e",
          300: "#f0df5c",
          400: "#eacb34",
          500: "#dfaf20",
          600: "#c58a1b",
          700: "#a0651c",
          800: "#814f1d",
          900: "#69401c",
          950: "#3c230c",
        },
      },
    },
  },
  plugins: [],
};
