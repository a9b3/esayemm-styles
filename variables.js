const tinycolor = require('tinycolor2')

module.exports = {

  /*
   * COLORS
   */

  colors: {
    white: '#ffffff',
    gray: '#363732',
    lightgray: '#DCE1E9',
    cyan: '#81D2C7',
    blue: '#66C3FF',
    yellow: '#FFC937',
    pink: '#D4AFB9',
    green: '#21A179',
    red: '#C67B7D',
    slate: '#2e3d49',

    brand: '#D4AFB9',
    secondary: '#0D0A08',
    error: '#C67B7D',
    warning: '#FFC937',
    success: '#21A179',

    defaultText: '#666667',
    defaultTextSecondary: tinycolor('#666667').setAlpha(.8).toString(),
    headerColor: tinycolor('#666667').darken(50).toString(),
  },

  /*
   * SIZING
   */

  sizing: {
    // Use for layout spacing (margin, padding etc).
    spacing1: '6rem',
    spacing2: '4rem',
    spacing3: '2rem',
    spacing4: '1rem',
    spacing5: '.6rem',
    spacing6: '.4rem',

    // Use for font sizes.
    size1: '3em',
    size2: '2.25em',
    size3: '1.75em',
    size4: '1.125em',
    size5: '1em',
    size6: '.8em',

    maxWidth: '80rem',
  },
}
