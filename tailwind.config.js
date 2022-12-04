/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        "brand-primary": "#5429FF",
        "brand-light": "#CBCCE8",
      },
    },
  },
  plugins: [],
};
