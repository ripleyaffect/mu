import Color from 'color'
import React from 'react'
import styled from 'styled-components'

import MuAvatar from 'components/MuAvatar'
import {
  black, blackBoxShadow, darkPurple, grey, lightGrey, purple
} from 'styling/vars'

const Container = styled.button`
  display: flex;
  align-items: center;
  height: 72px;
  width: 100%;
  padding: 0;
  border: 1px ${lightGrey} solid;
  margin-bottom: 12px;
  border-radius: 10px;
  cursor: pointer;

  :hover, :focus {
    border-color: ${grey};
    outline: none;
  }
`

const Icon = styled.div`
  height: 36px;
  width: 36px;
  border-radius: 50%;
  margin-left: 18px;
  background-color: ${lightGrey};
  box-shadow: ${blackBoxShadow};
`

const DetailsContainer = styled.div`
  flex: 1;
`

const Button = styled.span`
  margin-right: 24px;
  font-size: 15px;
  color: ${purple};
  cursor: pointer;

  :hover {
    color: ${darkPurple}
  }

  :focus {
    outline: none;
  }
`

const MuProgramTask = () => (
  <Container>
    <Icon />
    <DetailsContainer />
    <Button>Details</Button>
  </Container>
)

export default MuProgramTask
