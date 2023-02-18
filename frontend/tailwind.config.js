/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-theme": "#151515",
        "white-theme": "#E9E2D9",
      },
    },
  },
  plugins: [],
};
