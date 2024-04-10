/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
      'xs': '375px',
      'maxW': '400px'
    },
      colors: {
        offBlack: 'hsl(0, 0%, 8%)',
        darkGrey: 'hsl(0, 0%, 12%)',
        neonGreen: 'hsl(75, 94%, 57%)',
        styleGrey: 'hsl(0, 0%, 20%)'
      },
      fontFamily:{
          inter: ['"Inter"', "sans-serif"]
      }
    },
  },
  plugins: [],
}

