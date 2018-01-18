import React from 'react'
import styled from 'styled-components'

import MuAvatar from 'components/MuAvatar'
import PostButton from 'components/PostButton'

const Container = styled.div`
  display: flex;
  padding-right: 24px;
`

const Right = ({ avatarImageUrl, onClickPost }) => (
  <Container>
    <PostButton marginRight={24} onClick={(e) => onClickPost()} />
    <MuAvatar imageUrl={avatarImageUrl} />
  </Container>
)

export default Right
