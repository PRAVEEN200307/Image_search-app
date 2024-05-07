/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "*/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       fontFamily:{
         man:["Montserrat",'sans-serif']
       }
    },
  },
  plugins: [],
}

