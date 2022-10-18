/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontSize : {
        '5xs': ['0.3rem', {
          lineHeight: '0.4rem' 
        }],
        '4xs': ['0.4rem', {
          lineHeight: '0.5rem' 
        }],
        '3xs': ['0.6rem', {
          lineHeight: '0.7rem' 
        }],
        '2xs': ['0.8rem', {
          lineHeight: '0.95rem' 
        }],
        '0\.5sm': ['13px', {
          lineHeight: '14px' 
        }],
      },
      width: {
        '18' : '4.5rem'        
      },
      spacing: {
        '18' : '4.5rem'        
      },
      colors:{
        'light': '#9A9A9A',
        'primary': '#202124',
      }
    },
    
  },
  plugins: [],
}
