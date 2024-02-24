/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#0063d1"
      },
      fontFamily: {
        Yekan: ["Yekan"]
      }
    },
  },
  plugins: [],
}

