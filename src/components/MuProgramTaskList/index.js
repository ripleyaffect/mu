import React from 'react'
import styled from 'styled-components'

import MuProgramTask from 'components/MuProgramTask'

const Container = styled.div`
margin-bottom: 36px;
`

const MuProgramTaskList = ({ programTasks }) => (
  <Container>
    {programTasks.map((programTask) => <MuProgramTask
        {...programTask}
        key={programTask.id} />)}
  </Container>
)

export default MuProgramTaskList
