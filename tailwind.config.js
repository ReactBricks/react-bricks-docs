const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './pages/**/*.js',
    './components/**/*.js',
    './node_modules/nextra-theme-docs/dist/*.js',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      black: '#000',
      white: '#fff',

      amber: colors.amber,
      blue: colors.blue,
      cyan: colors.cyan,
      emerald: colors.emerald,
      fuchsia: colors.fuchsia,
      gray: colors.coolGray,
      green: colors.green,
      indigo: colors.indigo,
      'light-blue': colors.lightBlue,
      lime: colors.lime,
      orange: {
        ...colors.orange,
        1000: '#4a2008',
      },
      pink: {
        ...colors.pink,
        1000: '#460d25',
      },
      purple: colors.purple,
      red: colors.red,
      rose: colors.rose,
      teal: colors.teal,
      violet: colors.violet,
      yellow: colors.yellow,
    },
    extend: {
      colors: {
        dark: '#111',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
