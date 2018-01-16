import React from 'react'
import styled from 'styled-components'

import { blackBoxShadow, lightGrey } from 'styling/vars'

import Left from './Left'
import Right from './Right'

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
  width: 100%;
  background-color: white;
  ${'' /* box-shadow: ${blackBoxShadow}; */}
  ${'' /* border-bottom: 1px ${lightGrey} solid; */}
  z-index: 2;
`

const MuHeader = ({ onClickPost }) => (
  <Header>
    <Left />
    <Right onClickPost={onClickPost} />
  </Header>
)

export default MuHeader
