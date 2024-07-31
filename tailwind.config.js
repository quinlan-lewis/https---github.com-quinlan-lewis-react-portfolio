/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
            primary: "#011825"
        }
      },
      maxHeight: {
        '80': '80rem',
        '96': '24rem'
      }
    },
    plugins: [],
  }