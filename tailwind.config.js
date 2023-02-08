/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'colorShadowBG': '#372C19',
      },
      boxShadow: {
        'user': '5px 0px 5px 5px rgba(55, 44, 25)'
      }
    },
  },
  plugins: [],
}
