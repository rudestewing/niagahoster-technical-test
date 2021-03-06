module.exports = {
  prefix: 't-',
  purge: [],
  theme: {
    fontFamily: {
      'sans-serif': ['Montserrat', 'Open Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        'blue-medium': '#2C8FEE',
        'blue-darken': '#247FDF',
        'dark': '#303030',
        'green-medium': '#52B35A',
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'odd', 'even', 'hover', 'focus']
  },
  plugins: [],
}
