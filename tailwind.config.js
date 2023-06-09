/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
      colors: {
        'detective-thriller': '#393c41',
      },
      opacity: {
        '85': '.85',
        '65': '.65',
      },
      margin: {
        '7.5': '1.875rem'
      },
      minHeight: {
        '6': '3.75rem'
      },
      padding: {
        '2.5': '.6125rem'
      },
      width: {
        '75': '18.75rem',
        '50': '14rem'
      },
      zIndex: {
        '100': '100'
      },
      visibility: {
        'vis': 'visible'
      },
      visibility: {
        'invis': 'hidden'
      },
    
    },
  plugins: [],
}
}