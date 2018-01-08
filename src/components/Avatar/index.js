import Color from 'color'
import React from 'react'
import styled from 'styled-components'

import { black } from 'styling/vars'

const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  width: 36px;
  background-color: ${black};
  border-radius: 50%;
  color: white;
  font-family: 'Work Sans', sans-serif;
  font-size: 15px;
  font-weight: 500;
  box-shadow: 0 1px 10px ${Color(black).alpha(0.15).string()};
`

const Avatar = ({ initials }) => (
  <Circle>
    {initials || 'TP'}
  </Circle>
)

export default Avatar
