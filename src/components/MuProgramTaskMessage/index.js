import React from 'react'
import styled from 'styled-components'

import MuAvatar from 'components/MuAvatar'
import {
  black, blackBoxShadow, darkPurple, grey, lightGrey, purple
} from 'styling/vars'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 72px;
  width: 100%;
  padding: 0;
  border: 1px ${lightGrey} solid;
  margin-bottom: 12px;
  border-radius: 10px;
  font-size: 18px;
`

const getText = (tasksLeft) =>
  tasksLeft === 0 ? 'All done! Go enjoy the day 🎉'
: tasksLeft === 1 ? 'Almost there! Knock out that last task ☝️'
: tasksLeft === 2 ? 'Two more till you can peace out ✌️'
: tasksLeft === 3 ? 'Getting close! Just a few more things to do 🤙'
: tasksLeft <=  7 ? 'Lots to do, but you got this 💪'
: 'Godspeed 🙏'

const MuProgramTaskMessage = ({ tasksLeft }) => (
  <Container>{getText(tasksLeft)}</Container>
)

export default MuProgramTaskMessage
