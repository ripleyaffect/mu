import React from 'react'
import styled from 'styled-components'

import MuTaskList from 'components/MuTaskList'
import MuPost from 'components/MuPost'
import MuProgramTask from 'components/MuProgramTask'

import { grey } from 'styling/vars'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const ProgramTasks = styled.div`
  margin-bottom: 36px;
`

const Posts = styled.div`
  margin-bottom: 60px;
`

const Title  = styled.h1`
  margin-top: 0;
  margin-bottom: 12px;
  font-size: 48px;
  font-weight: 500;
`

const Subtitle = styled.h4`
  margin-top: 0;
  margin-bottom: 36px;
  font-size: 18px;
  font-weight: 500;

  color: ${grey};
`

const tasks = [
  { id: 1, content: 'Test one' },
  { id: 2, content: 'Test two' },
  { id: 3, content: 'Test three' },
  { id: 4, content: 'Test four' },
]

const MuDay = () => (
  <Container>
    <Title>Today</Title>
    <Subtitle>January 14th, 2017</Subtitle>
    <MuTaskList tasks={tasks} />
    <ProgramTasks>
      <MuProgramTask />
      <MuProgramTask />
      <MuProgramTask />
    </ProgramTasks>
    <Posts>
      <MuPost />
      <MuPost />
      <MuPost />
      <MuPost isLast={true} />
    </Posts>
  </Container>
)

export default MuDay
