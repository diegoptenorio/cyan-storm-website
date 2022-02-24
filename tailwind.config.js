const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/pages/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'black': '#000',
      'white': '#F4F4F4',
      'cyan': '#4DD2FF',
      'light-blue': '#4EAAFE',
      'dark-blue': '#1D65A7',
      'gradient-light-blue': '#0B2680',
      'gradient-dark-blue': '#0A1128',
      'grey': '#4F4F4F'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    }
  },
  plugins: [],
}