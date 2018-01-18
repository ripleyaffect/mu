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
  background-image: url('${({ imageUrl }) => imageUrl}');
  background-size: cover;
`

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  margin-left: 12px;
`

const DisplayName = styled.span`
  margin-bottom: 4px;
  color: ${black};
  font-size: 18px;
  font-weight: 400;
`

const ProgramDisplayName = styled.span`
  color: ${grey};
  font-size: 13px;
  font-weight: 500;
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

const MuProgramTask = ({
    programTask: { title },
    subscription: { program },
}) => (
  <Container>
    <Icon imageUrl={program.imageUrl} />
    <DetailsContainer>
      <DisplayName>{title}</DisplayName>
      <ProgramDisplayName>{program.title}</ProgramDisplayName>
    </DetailsContainer>
    <Button>Log</Button>
  </Container>
)

export default MuProgramTask
