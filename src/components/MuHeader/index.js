import React from 'react'
import styled from 'styled-components'

import Left from './Left'
import Right from './Right'

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
  width: 100%;
  background-color: white;
`

const MuHeader = () => (
  <Header>
    <Left />
    <Right />
  </Header>
)

export default MuHeader
