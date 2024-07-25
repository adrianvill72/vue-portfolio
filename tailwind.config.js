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
      keyframes:{
        blob:{
          "0%":{
            transform: "translate(0px, 0px) scale(1)"
          },

          "10%":{
            transform: "translate(-350px, 550px) scale(1.1)"
          },
          "20%":{
            transform: "translate(350px, 550px) scale(0.9)"
          },
          "30%":{
            transform: "translate(0px, 112px) scale(1)"
          },
          "40%":{
            transform: "translate(-175px, 350px) scale(1.1)"
          },
          "45%":{
            transform: "translate(175px, 350px) scale(1)"
          },
          "50%":{
            transform: "translate(0px, 225px) scale(1)"
          },
          "55%":{
            transform: "translate(175px, 350px) scale(1)"
          },
          "60%":{
            transform: "translate(-175px, 350px) scale(1)"
          },
          "70%":{
            transform: "translate(0px, 112px) scale(1)"
          },
          "80%":{
            transform: "translate(350px, 550px) scale(0.9)"
          },
          "90%":{
            transform: "translate(-350px, 550px) scale(1.1)"
          },
          "100%":{
            transform: "translate(0px, 0px) scale(1)"
          }
        },
        blob2:{
          "0%":{
            transform: "translate(0px, 0px) scale(1)"
          },

          "10%":{
            transform: "translate(700px, 0px) scale(1.1)"
          },
          "20%":{
            transform: "translate(350px, -550px) scale(0.9)"
          },
          "30%":{
            transform: "translate(175px, -137px) scale(1)"
          },
          "40%":{
            transform: "translate(525px, -137px) scale(1.1)"
          },
          "45%":{
            transform: "translate(350px, -412px) scale(1)"
          },
          "50%":{
            transform: "translate(350px, -275px) scale(1)"
          },
          "55%":{
            transform: "translate(350px, -412px)scale(1)"
          },
          "60%":{
            transform: "translate(525px, -137px) scale(1)"
          },
          "70%":{
            transform: "translate(175px, -137px) scale(1)"
          },
          "80%":{
            transform: "translate(350px, -550px)scale(0.9)"
          },
          "90%":{
            transform: "translate(700px, 0px) scale(1.1)"
          },
          "100%":{
            transform: "translate(0px, 0px) scale(1)"
          }
        },
        blob3:{
          "0%":{
            transform: "translate(0px, 0px) scale(1)"
          },
          "10%":{
            transform: "translate(-350px, -550px) scale(0.9)"
          },
          "20%":{
            transform: "translate(-700px, 0px) scale(1.1)"
          },
          "30%":{
            transform: "translate(-175px, -137px) scale(1)"
          },
          "40%":{
            transform: "translate(-350px, -412px) scale(1)"
          },
          "45%":{
            transform: "translate(-525px, -137px) scale(1.1)"
          },
          "50%":{
            transform: "translate(-350px, -275px) scale(1)"
          },
          "55%":{
            transform: "translate(-525px, -137px) scale(1)"
          },
          "60%":{
            transform: "translate(-350px, -412px)scale(1)"
          },
          "70%":{
            transform: "translate(-175px, -137px) scale(1)"
          },
          "80%":{
            transform: "translate(-700px, 0px) scale(1.1)"
          },
          "90%":{
            transform: "translate(-350px, -550px)scale(0.9)"
          },
          "100%":{
            transform: "translate(0px, 0px) scale(1)"
          }
        }
      }
    },
  },
  plugins: [],
}

