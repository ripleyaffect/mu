import React from 'react'
import styled from 'styled-components'
import { graphql } from 'react-apollo'

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

const Task = styled.button`
  display: block;
  padding: 0;
  border: none;
  margin-top: 12px;
  margin-bottom: 24px;
  background: none;
  color: ${black};
  cursor: pointer;
  font-size: 18px;
  font-weight: 400;

  :hover, :focus {
    outline: none;
    text-decoration: line-through;
  }
`

const MuTaskList = ({ tasks }) => (
  <Container>
    <Input placeholder="Add a task" />
    {tasks.map(({ content, id }) => <Task key={id}>{content}</Task>)}
  </Container>
)

export default MuTaskList
