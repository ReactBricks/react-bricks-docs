module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: '#111'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
