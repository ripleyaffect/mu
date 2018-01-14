import React from 'react'
import styled from 'styled-components'

import { black, grey } from 'styling/vars'

const Container = styled.div`
  margin-bottom: 24px;
  font-size: 18px;
  font-weight: 400;
`

const Input = styled.input`
  padding-top: 12px;
  padding-bottom: 12px;
  border: none;
  font-size: 18px;
  font-weight: 400;

  :hover, :focus {
    outline: none;
  }

  ::placeholder {
    color: ${grey}
  }
`

const Task = styled.p`
  margin-top: 12px;
  margin-bottom: 24px;
  color: ${black};
  font-size: 18px;
  font-weight: 400;
`

const MuTaskList = () => (
  <Container>
    <Input placeholder="Add a task" />
    <Task>Task one</Task>
    <Task>Task two</Task>
    <Task>Task three</Task>
  </Container>
)

export default MuTaskList
