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
          DEFAULT: '#d32f2f',
          hover: '#b71c1c',
        },
        secondary: '#000000',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backgroundColor: {
        dark: '#0a0a0a',
        card: '#171717',
      },
      textColor: {
        main: '#f5f5f5',
        muted: '#a3a3a3',
      },
    },
  },
  plugins: [],
}
