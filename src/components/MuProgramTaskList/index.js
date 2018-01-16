import React from 'react'
import styled from 'styled-components'

import MuProgramTask from 'components/MuProgramTask'
import MuProgramTaskMessage from 'components/MuProgramTaskMessage'

const Container = styled.div`
margin-bottom: 36px;
`

const MuProgramTaskList = ({ tasksLeft, programTasks }) => (
  <Container>
    {programTasks.map((programTask) => <MuProgramTask
        {...programTask}
        key={programTask.id} />)}
    {programTasks.length === 0 && <MuProgramTaskMessage tasksLeft={tasksLeft} />}
  </Container>
)

export default MuProgramTaskList
