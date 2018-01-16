import React, { Component } from 'react'
import styled from 'styled-components'
import { graphql } from 'react-apollo'

import createTaskMutation from '~graphql/mutations/createTask.gql'
import todayQuery from '~graphql/queries/today.gql'
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
  cursor: pointer;
  font-size: 18px;
  font-weight: 400;
  color: ${({ optimistic }) => optimistic ? grey : black};
  pointer-events: ${({ optimistic }) => optimistic ? 'none' : 'auto'};

  :hover, :focus {
    outline: none;
    text-decoration: line-through;
  }
`

class MuTaskList extends Component {
  constructor (props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = { newTask: '' }
  }

  handleChange (event) {
    this.setState({ newTask: event.target.value })
  }

  handleSubmit (event) {
    event.preventDefault()

    console.log(this.state.newTask)
    this.props.mutate({
      mutation: createTaskMutation,
      variables: { content: this.state.newTask },
      optimisticResponse: {
        task: {
          id: Math.round(Math.random() * -1000000),
          createdAt: +new Date(),
          content: this.state.newTask,
          __typename: 'Task',
        }
      },
      update: (proxy, { data: { task } }) => {
        const data = proxy.readQuery({ query: todayQuery });

        // Add the task
        data.tasks.push(task);

        proxy.writeQuery({ query: todayQuery, data });
      }
    })

    // Reset value
    this.setState({ newTask: '' })
  }

  render () {
    const { tasks } = this.props
    const { newTask } = this.state

    return <Container>
      <form onSubmit={this.handleSubmit}>
        <Input
            onChange={this.handleChange}
            placeholder="Add a task"
            value={newTask} />
      </form>
      {tasks.map(({ content, id }) => <Task
          key={id}
          optimistic={id < 0}>
        {content}
      </Task>)}
    </Container>
  }
}

export default graphql(createTaskMutation)(MuTaskList)
