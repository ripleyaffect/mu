import React from 'react'

const DEFAULT_COLOR = '#2B2B2B'
const DEFAULT_SIZE = 32

const Logo = ({ color, size }) => {
  color = color || DEFAULT_COLOR
  size = size || DEFAULT_SIZE
  return <svg width={`${size}px`} height={`${size}px`} viewBox={`0 0 ${size} ${size}`} version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>ム</title>
    <g id="Desktop-Copy-4" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(-26.000000, -19.000000)">
      <path d="M47.184,32.16 C50.208,35.76 53.736,41.376 57.768,49.044 L54.456,50.844 C53.7,49.404 52.98,48.036 52.26,46.776 C45.168,47.784 36.564,48.432 26.412,48.792 L26.268,45.408 L29.832,45.264 C32.136,38.928 35.34,30.396 39.444,19.704 L43.008,20.892 C40.272,27.804 37.212,35.868 33.9,45.048 C40.344,44.652 45.852,44.184 50.46,43.608 L49.668,42.312 C47.652,39 45.852,36.3 44.232,34.284 L47.184,32.16 Z" id="ム" fill={color}></path>
    </g>
  </svg>
}

export default Logo
