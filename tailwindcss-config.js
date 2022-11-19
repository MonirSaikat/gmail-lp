/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './dist/**/*.{html,js}',
  ],
  theme: {
    extend: {
      fontSize: {
        'xl': '20px',
        '2xl': '28px',
      },
      backgroundImage: {
        'hero-bg': "url('./img/banner-one.jpg')"
      }
    },
    container: {
      center: true,
      padding: '1rem'
    }
  },
  plugins: [],
}
