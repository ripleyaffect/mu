import Color from 'color'
import React from 'react'
import styled from 'styled-components'

import { purple } from 'styling/vars'

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
  border-radius: 5px;
  font-size: 15px;
  font-weight: 500;
  box-shadow: 0 1px 10px ${Color(purple).alpha(0.25).string()};
  transition: transform 0.17s ease-in-out;

  :hover {
    transform: scale(1.1);
  }
`

const PostButton = () => (
  <Button>
    Post
  </Button>
)

export default PostButton
