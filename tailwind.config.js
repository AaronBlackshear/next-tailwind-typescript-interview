/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["rubik", ...defaultTheme.fontFamily.sans],
      },
      letterSpacing: {
        tightest: "-0.02em",
      },
      colors: {
        primary: '#263446',
        turquoise: "#70C4BB",
        grayPrimary: "#9DA7BE",
        grayShadow: "#415be733",
      } ,
      boxShadow: {
        minimal: '0px 0px 0px 2px rgba(65, 91, 231, 0.2)',
      },
      gridTemplateColumns: {
        layout: 'minmax(65px, 1fr) minmax(auto, 3fr) minmax(60px, 1fr) minmax(118px, 1fr) minmax(106px, 1fr)',
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
