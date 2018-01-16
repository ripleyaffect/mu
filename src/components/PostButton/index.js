import Color from 'color'
import React from 'react'
import styled from 'styled-components'

import { darkPurple, purple, purpleBoxShadow } from 'styling/vars'

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  width: 96px;
  border: none;
  margin-right: 24px;
  color: white;
  cursor: pointer;
  background-color: ${purple};
  border-radius: 6px;
  font-size: 15px;
  font-weight: 500;
  box-shadow: ${purpleBoxShadow};

  :hover, :focus {
    outline: none;
    background-color: ${darkPurple};
  }
`

const PostButton = ({ onClick }) => (
  <Button onClick={onClick}>
    Post
  </Button>
)

export default PostButton
