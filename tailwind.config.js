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
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'odd', 'even', 'hover', 'focus']
  },
  plugins: [],
}
