/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        offBlack: 'hsl(0, 0%, 8%)',
        darkGrey: 'hsl(0, 0%, 12%)'
      },
      fontFamily:{
          inter: ['"Inter"', "sans-serif"]
      }
    },
  },
  plugins: [],
}

