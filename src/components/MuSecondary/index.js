import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 200px;
  padding-top: 12px;
  margin-left: 36px;
`

const MuSecondary = ({ children }) => (
  <Container>
    {children}
  </Container>
)

export default MuSecondary
