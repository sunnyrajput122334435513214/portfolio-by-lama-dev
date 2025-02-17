/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      screens:{
        "sm":"480px"
    },
    spacing:{
        "big":"48rem" 

  }
  },
  plugins: [],
}

}