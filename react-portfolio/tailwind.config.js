/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'dancing': ['Dancing Script', 'cursive'],
        'josefin': ['Josefin Sans', 'sans-serif'],
      },
      backgroundColor: {
        'primary': 'var(--color-bg)',
      },
      textColor: {
        'primary': 'var(--color-text)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}