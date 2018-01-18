import React from 'react'
import styled from 'styled-components'

import MuProgramTask from 'components/MuProgramTask'
import MuProgramTaskMessage from 'components/MuProgramTaskMessage'

const Container = styled.div`
margin-bottom: 36px;
`

const MuProgramTaskList = ({ onClickTask, tasks, todosLeft }) => (
  <Container>
    {tasks.map((task) => <MuProgramTask
        {...task}
        onClick={onClickTask}
        key={task.id} />)}
    {tasks.length === 0 && <MuProgramTaskMessage todosLeft={todosLeft} />}
  </Container>
)

export default MuProgramTaskList
