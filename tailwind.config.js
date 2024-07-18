/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text-red': "#DF4741",
      },
      boxShadow:{
        'box-shadow': "0px 5px 18px 0px #00000061",
        'box_shadow_2': "0px 0px 20px 0px #00000061",
      },
      fontFamily:{
        'Bals-font': "Balsamiq Sans",
        'dela-font': "Dela Gothic One",
      }
    },
  },
  plugins: [],
}

