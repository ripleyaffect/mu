import React from 'react'
import styled from 'styled-components'

import MuPost from 'components/MuPost'

const Container = styled.div`
  margin-bottom: 60px;
`

const MuTimeline = ({ posts }) => {
  const lastPostIndex = posts.length - 1

  return <Container>
    {posts.map((post, index) => <MuPost
        {...post}
        isLast={index === lastPostIndex}
        key={post.id} />)}
  </Container>
}

export default MuTimeline
