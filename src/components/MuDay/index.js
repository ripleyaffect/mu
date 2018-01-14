import React from 'react'
import styled from 'styled-components'

import MuTaskList from 'components/MuTaskList'
import MuProgramTask from 'components/MuProgramTask'

import Header from './Header'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const MuDay = () => (
  <Container>
    <Header />
    <MuTaskList />
    <MuProgramTask />
    <MuProgramTask />
    <MuProgramTask />
  </Container>
)

export default MuDay
