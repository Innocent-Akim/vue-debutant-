/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  mode: 'jif',
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      display: ['Open Sans', 'sans-serif'],
      body: ['Open Sans', 'sans-serif'],
    },
    
    extend: {
      fontSize: {
        14: '14px',
      },
      colors: {
        teal: colors.teal,
        cyan: colors.cyan,
        gray: colors.gray,
        white: '#fff',
      },
     
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
}
