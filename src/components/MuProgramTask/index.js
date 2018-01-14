import React from 'react'
import styled from 'styled-components'

import MuAvatar from 'components/MuAvatar'
import { grey, lightGrey, purple } from 'styling/vars'

const Container = styled.div`
  display: flex;
  align-items: center;

  height: 72px;
  width: 100%;
  border: 1px ${lightGrey} solid;
  margin-bottom: 12px;
  border-radius: 10px;

  :hover {
    border-color: ${grey};
  }
`

const Icon = styled.div`
  height: 36px;
  width: 36px;
  border-radius: 50%;
  margin-left: 12px;
  background-color: grey;
`

const DetailsContainer = styled.div`
  flex: 1;
`

const Button = styled.button`
  border: none;
  margin-right: 24px;
  background: none;
  font-size: 15px;
  color: ${purple};
`

const MuProgramTask = () => (
  <Container>
    <Icon />
    <DetailsContainer />
    <Button>Details</Button>
  </Container>
)

export default MuProgramTask
