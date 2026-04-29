/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0B4A7B', // Medical Blue
          light: '#1B6AAB',
          dark: '#053054',
        },
        secondary: {
          DEFAULT: '#CFA76E', // Soft Gold
          light: '#E2C394',
          dark: '#A6824F',
        },
      }
    },
  },
  plugins: [],
}
