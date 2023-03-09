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
      aspectRatio: {
        '4/3': '4 / 3',
      },
    },
    container: {
      center: true,

      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '1rem',
        xl: '1rem',
        '2xl': '6rem',
      },
    },
  },
};
