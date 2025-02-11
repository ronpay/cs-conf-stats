/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html", "./fun-fact.html", "./catalog.html"],
  theme: {
    extend: {
      colors: {
        uestc: {
          DEFAULT: '#004098'
        },
        uestc_orange: {
          DEFAULT: '#F08300'
        },
        google: {
          DEFAULT: '#1A0DAB'
        }
      }
    },
  },
  plugins: [],
}

