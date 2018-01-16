import Color from 'color'

export const setAlpha = (color, alpha) => Color(color).alpha(alpha).string()
