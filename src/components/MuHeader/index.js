import React from 'react'
import styled from 'styled-components'

import Center from './Center'
import Left from './Left'
import Right from './Right'

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
  background-color: white;
`

const MuHeader = () => (
  <Header>
    <Left />
    <Center />
    <Right />
  </Header>
)

export default MuHeader
