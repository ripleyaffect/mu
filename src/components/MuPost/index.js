import React from 'react'
import styled from 'styled-components'

import MuAvatar from 'components/MuAvatar'
import { grey } from 'styling/vars'

const Container = styled.div`
  display: flex;
  width: 100%;
  margin-left: 19px;
  padding-bottom: 36px;
`

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 12px;
`

const Content = styled.p`
  margin-top: 0;
  margin-bottom: 4px;
  font-size: 18px;
  font-weight: 400;
`

const Meta = styled.span`
color: ${grey};
font-size: 13px;
font-weight: 500;
`

const MuPost = () => (
  <Container>
    <MuAvatar />
    <DetailsContainer>
      <Content>Test test test</Content>
      <Meta>Posted at 4:31 PM</Meta>
    </DetailsContainer>
  </Container>
)

export default MuPost
