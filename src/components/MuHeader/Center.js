import React from 'react'
import styled from 'styled-components'

import Logo from 'components/Logo'
import { black, grey } from 'styling/vars'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 175px;
`

const Item = styled.span`
  color: ${({ selected }) => selected ? black : grey};
  font-size: 18px;
  font-weight: 600;
`

const Center = () => (
  <Container>
    <Item selected>Today</Item>
    <Item>Programs</Item>
  </Container>
)

export default Center
