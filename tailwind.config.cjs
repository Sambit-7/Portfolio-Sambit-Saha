/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: "#7c7cff",
      },
    },
  },
  plugins: [],

  extend: {
  colors: {
    neon: "#7c7cff",
  },
}

}
