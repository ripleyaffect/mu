import Color from 'color'

/* Colors */

export const black = '#2B2B2B'
export const grey = '#969696'
export const lightGrey = '#D5D4D4'
export const white = '#FFFFFF'

const darken = (color) => Color(color).mix(Color(black), 0.15).string()

export const orange = '#E88C30'
export const darkOrange = darken(orange)

export const purple = '#5C53DF'
export const darkPurple = darken(purple)

export const colorMap = {
  black,
  grey,
  lightGrey,
  white,

  purple,
  darkPurple,

  orange,
  darkOrange,
}

/* Attribues */

const getBoxShadow = (color, alpha = 0.15) =>
  `0 1px 10px ${Color(color).alpha(alpha).string()};`

export const blackBoxShadow = getBoxShadow(black)
export const purpleBoxShadow = getBoxShadow(darkPurple)
