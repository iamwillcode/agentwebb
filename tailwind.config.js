const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: ({ colors }) => ({
        gray: colors.neutral,
        // sirocco
        primary: {
          50: "#f6f7f7",
          100: "#e1e6e6",
          200: "#c3cccb",
          300: "#9eaaaa",
          400: "#717f7f",
          500: "#5f6c6d",
          600: "#4b5656",
          700: "#3e4747",
          800: "#343b3b",
          900: "#2e3233",
        },
        // 'double-spanish-white'
        secondary: {
          50: "#faf7f0",
          100: "#f1e9d4",
          200: "#e8dcba",
          300: "#d2b777",
          400: "#c7a158",
          500: "#bd8943",
          600: "#a66c39",
          700: "#8b5432",
          800: "#72442e",
          900: "#5f3928",
        },
      }),
      fontFamily: {
        sans: ['Faustina', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
