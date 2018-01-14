import React from 'react'
import styled from 'styled-components'

import { grey } from 'styling/vars'

const Container = styled.div`
  margin-bottom: 36px;
`

const Title  = styled.h1`
  margin-top: 0;
  margin-bottom: 12px;
  font-size: 48px;
  font-weight: 500;
`

const Subtitle = styled.h4`
  margin: 0;
  font-size: 18px;
  font-weight: 500;

  color: ${grey};
`

const Header = () => (
  <Container>
    <Title>Today</Title>
    <Subtitle>January 14th, 2017</Subtitle>
  </Container>
)

export default Header
