/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#03677E',
      },
      fontFamily: {
        roboto: ["Roboto", 'sans-serif'],
        markazi: ["Markazi Text", 'sans-serif'],
      },
    },
  },
  plugins: [],
}

// npx tailwindcss -i ./src/styles.css -o ./src/output.css --watch