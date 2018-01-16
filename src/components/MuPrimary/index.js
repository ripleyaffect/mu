import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const MuPrimary = ({ children }) => (
  <Container>
    {children}
  </Container>
)

export default MuPrimary
