/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  // enable dark mode via class strategy
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {

        bread:{
          lightyello:'#fefadcff',
          yello: '#ffc412',
          orage: '#bc3e15',
          darkyello: '#e28413ff'
        },
        black: '#09090c',
        darkGray: '#121212',
        
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',

        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        
        primary: {
          DEFAULT: '#FF592C;',
          purple:'#9757D7',
          pink: '#EF466F',
          green:'#45B36B',

        },
        secondary:{
          DEFAULT:'#3772FF',
          pink: '#E4D7CF',
          yellow: '#FFD166',
          purple:'#CDB4DB',
        },
        gray: { 
          DEFAULT:'#ffffff',
          100:'#FCFCFD',
        200: '#F4F5F6',
        300:'#E6E8EC',
        400:'#B1B5C4',
        500:'#777E91',
        600:'#353945',
        700:'#23262F',
        800:'#141416'
      }
      },
      fontFamily: {
        poppins: ['Poppins' ,'sans-sarif'],
        dmsans: ['DM Sans', 'sans-sarif']
      }
    },
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1780px',
      '4xl': '2160px', // only need to control product grid mode in ultra 4k device
    },
  },
  plugins: [require('@tailwindcss/forms'),],
}
