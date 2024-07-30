/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {

  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      animation:{
        blob:"blob 60s infinite",
        blob2:"blob2 60s infinite",
        blob3:"blob3 60s infinite",
      },
      keyframes: {
        blob: {
          "0%, 100%": {
            transform: "translate(-5vw, 0vh) scale(1)"
          },
          "10%, 90%": {
            transform: "translate(-40vw, 60vh) scale(1.2)"
          },
          "20%, 80%": {
            transform: "translate(30vw, 60vh) scale(1)"
          },
          "30%, 70%": {
            transform: "translate(-5vw, 12vh) scale(.8)"
          },
          "40%, 60%": {
            transform: "translate(-17.5vw, 35vh) scale(1)"
          },
          "45%, 55%": {
            transform: "translate(5vw, 35vh) scale(1.2)"
          },
          "50%": {
            transform: "translate(-5vw, 22.5vh) scale(1)"
          }
        },
        blob2: {
          "0%, 100%": {
            transform: "translate(0vw, -10vh) scale(1)"
          },
          "10%, 90%": {
            transform: "translate(65vw, -10vh) scale(1.1)"
          },
          "20%, 80%": {
            transform: "translate(30vw, -70vh) scale(0.9)"
          },
          "30%, 70%": {
            transform: "translate(17.5vw, -30vh) scale(1)"
          },
          "40%, 60%": {
            transform: "translate(40vw, -30vh) scale(1.1)"
          },
          "45%, 55%": {
            transform: "translate(30vw, -60vh) scale(1)"
          },
          "50%": {
            transform: "translate(30vw, -50vh) scale(1)"
          }
        },
        blob3: {
          "0%, 100%": {
            transform: "translate(0vw, -10vh) scale(1)"
          },
          "10%, 90%": {
            transform: "translate(-40vw, -70vh) scale(0.9)"
          },
          "20%, 80%": {

            transform: "translate(-65vw, -10vh) scale(1.1)"
          },
          "30%, 70%": {
            transform: "translate(-27.5vw, -30vh) scale(1)"
          },
          "40%, 60%": {
            transform: "translate(-40vw, -60vh) scale(1)"
          },
          "45%, 55%": {
            transform: "translate(-50vw, -30vh) scale(1.1)"
          },
          "50%": {
            transform: "translate(-40vw, -50vh) scale(1)"
          }
        }
        }
      },
  },
  plugins: [],
}

