import moment from 'moment'
import React from 'react'
import styled from 'styled-components'

import MuAvatar from 'components/MuAvatar'
import { grey, lightGrey } from 'styling/vars'

const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  margin-left: 19px;
  padding-bottom: 36px;
`

const Connector = styled.span`
  position: absolute;
  top: 38px;
  left: 17px;
  height: calc(100% - 40px);
  width: 3px;
  background-color: ${lightGrey};
  border-radius: 5px;
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
  line-height: 24px;
`

const Meta = styled.span`
color: ${grey};
font-size: 13px;
font-weight: 500;
`

const MuPost = ({ content, createdAt, isLast }) => (
  <Container>
    {!isLast && <Connector />}
    <MuAvatar />
    <DetailsContainer>
      <Content>{content}</Content>
      <Meta>Posted on {moment(createdAt).format('MMM Do [at] h:mm A')}</Meta>
    </DetailsContainer>
  </Container>
)

export default MuPost
