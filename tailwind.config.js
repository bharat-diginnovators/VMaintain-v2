/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '320px', 
        'xs-1': '375px', 
         
        
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}

