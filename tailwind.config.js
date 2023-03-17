/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purp: "#7D75D8",
        blue: "#6B60EB",
        navy: "#303365",
        dark: "#0E0F1E",
        pink: "#CE5FE5",
        grey: "#f6f6f6",
      },
      fontFamily: {
        prata: ["Prata", "serif"],
        open: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
