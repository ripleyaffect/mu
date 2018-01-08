import React from 'react'
import { injectGlobal } from 'styled-components'
import normalize from 'styled-normalize'

import MuHeader from 'components/MuHeader'

// Define global styles
const globalStyles = injectGlobal`
  ${normalize}

  body, button, input {
    font-family: 'Work Sans', sans-serif;
  }
`

const App = () => (
  <div className="app">
    {globalStyles}
    <MuHeader />
  </div>
)

export default App
