import React from 'react'
import styled from 'styled-components'

import Logo from 'components/Logo'
import { black, grey, purple, white } from 'styling/vars'

const Item = styled.span`
  padding-top: 12px;
  padding-bottom: 12px;
  border-bottom: 3px ${({ selected }) => selected ? purple : white} solid;
  margin-left: 36px;
  color: ${({ selected }) => selected ? black : grey};
  font-size: 18px;
  font-weight: 600;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-left: 24px;
`

const Left = () => (
  <Container>
    <Logo />
    <Item selected>Today</Item>
    <Item>Programs</Item>
  </Container>
)

export default Left
