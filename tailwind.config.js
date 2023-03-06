/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        IBM: "'IBM Plex Sans', sans-serif",
        PLUS: "'Plus Jakarta Sans', sans-serif",
      },
      colors: {
        skin: {
          purple: '#7533FF',
          pink: '#EF4AF0',
        },
      },
      rotate: {
        5: '-5deg',
      },
    },
  },
  plugins: [],
};
