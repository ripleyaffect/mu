import React, { Component } from 'react'
import styled from 'styled-components'
import { graphql } from 'react-apollo'

import MuTask from 'components/MuTask'
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
  width: 100%;

  :hover, :focus {
    outline: none;
  }

  &[value=""] {
    width: auto;
  }

  ::placeholder {
    color: ${grey}
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
        const data = proxy.readQuery({
          query: todayQuery,
          variables: { completedAt: null },
        });

        // Add the task
        data.tasks.push(task);

        proxy.writeQuery({
          query: todayQuery,
          variables: { completedAt: null },
          data
        });
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
      {tasks.map(task => <MuTask
          {...task}
          key={task.id}
          optimistic={task.id < 0} />)}
    </Container>
  }
}

export default graphql(createTaskMutation)(MuTaskList)
