/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6c15cf',
        secondary: '#61DAFB',
        accent: '#FDCB58',
        bgColor: '#F5F5F5',
        textColor: '#333333',
        dark: '#0f172a'
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}