import React from 'react'
import styled from 'styled-components'

import Avatar from 'components/Avatar'
import PostButton from 'components/PostButton'

const Container = styled.div`
  display: flex;
  padding-right: 24px;
`

const Right = () => (
  <Container>
    <PostButton />
    <Avatar />
  </Container>
)

export default Right
