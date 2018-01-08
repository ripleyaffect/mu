import React from 'react'
import styled from 'styled-components'

import Logo from 'components/Logo'

const Container = styled.div`
  width: 156px;
  padding-left: 24px;
`

const Left = () => (
  <Container>
    <Logo />
  </Container>
)

export default Left
