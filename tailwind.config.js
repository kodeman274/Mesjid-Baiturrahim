/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      colors: {
        dark: '#262626',
        oren: '#FF5F08',
        lightgreen: '#A3FFAC33',
      },
      backgroundImage: {
        'bg-jeruk': "url('/img/bg-oren')",
      },
    },
  },
  plugins: [],
};
