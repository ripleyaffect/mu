import React from 'react'
import styled from 'styled-components'

import MuAvatar from 'components/MuAvatar'
import PostButton from 'components/PostButton'

const Container = styled.div`
  display: flex;
  padding-right: 24px;
`

const Right = () => (
  <Container>
    <PostButton />
    <MuAvatar />
  </Container>
)

export default Right
