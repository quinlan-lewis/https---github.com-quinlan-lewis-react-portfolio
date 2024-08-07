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
      },
      height : {
        'exps': '35rem',
        'img': '35rem',
        'full': '100%'
      },
      width : {
        'exps': '35rem',
        'full': '100%'
      },
      maxWidth : {
        'exps': '35rem',
        'full': '100%',
        'large': '1000px'
      },
      maxHeight : {
        'exps': '35rem',
        'img': '35rem',
        'full': '100%'
      }
    },
    plugins: [],
  }