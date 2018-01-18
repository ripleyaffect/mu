import Color from 'color'
import React from 'react'
import styled from 'styled-components'

import { black, blackBoxShadow } from 'styling/vars'

const Avatar = styled.div`
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
  box-shadow: ${blackBoxShadow};
  background-image: url('${({ imageUrl }) => imageUrl}');
  background-size: cover;
`

const MuAvatar = ({ initials }) => (
  // TODO: pass from user
  <Avatar
      imageUrl={'https://avatars0.githubusercontent.com/u/1026406?s=200'} />
)

export default MuAvatar
