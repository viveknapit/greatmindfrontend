/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors:{
        'blueColor' : '#2a68ff',
        'grayIsh' : '#f1f4f8',
        'cardShadow' : '#f7f8f9',
        'textColor' : '#252b36',
        'liteBlue' : '#77C3EC',
      }
    },
  },
  plugins: [],
}

