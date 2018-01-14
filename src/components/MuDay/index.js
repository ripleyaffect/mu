import React from 'react'
import styled from 'styled-components'

import MuTaskList from 'components/MuTaskList'
import MuPost from 'components/MuPost'
import MuProgramTask from 'components/MuProgramTask'

import Header from './Header'

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

const MuDay = () => (
  <Container>
    <Header />
    <MuTaskList />
    <ProgramTasks>
      <MuProgramTask />
      <MuProgramTask />
      <MuProgramTask />
      <MuProgramTask />
      <MuProgramTask />
      <MuProgramTask />
    </ProgramTasks>
    <Posts>
      <MuPost />
      <MuPost />
      <MuPost />
      <MuPost />
      <MuPost />
      <MuPost />
    </Posts>
  </Container>
)

export default MuDay
