/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: {
          DEFAULT: "#0084CA",
          dark: "#0065A7",
          light: "#8AB8D7",
          lighter:"#5498C4"
        },
        secondary: {
          DEFAULT: "#FFA42C",
          light: "#FFB200",
          lighter:"#FFE09B"
        },
        gray:"#898989",
        slate:"#E9ECF1",
        lightslate:"#FFF7E6",
        darkslate:"#6C80A4",
        lightgray:"#dcdcdc",
        green:"#18AC00",
        offwhite:"#F2F6F9"
      }
    },
  },
  plugins: [],
}