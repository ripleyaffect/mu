import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import normalize from 'styled-normalize'

import MuBody from 'components/MuBody'
import MuHeader from 'components/MuHeader'
import MuModal from 'components/MuModal'

// Define global styles
const globalStyles = injectGlobal`
  ${normalize}

  body, button, input {
    font-family: 'Work Sans', sans-serif;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`

const App = () => (
  <Container>
    {globalStyles}
    <MuModal />
    <MuHeader />
    <MuBody />
  </Container>
)

export default App
