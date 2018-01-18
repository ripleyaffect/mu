import React, { Component } from 'react'
import styled from 'styled-components'
import { graphql } from 'react-apollo'

import MuTodo from 'components/MuTodo'
import createTodoMutation from '~graphql/mutations/createTodo.gql'
import todayQuery from '~graphql/queries/today.gql'
import { black, grey } from 'styling/vars'

const Container = styled.div`
  margin-bottom: 26px;
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

class MuTodoList extends Component {
  constructor (props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = { newTodo: '' }
  }

  handleChange (event) {
    this.setState({ newTodo: event.target.value })
  }

  handleSubmit (event) {
    event.preventDefault()

    const { newTodo } = this.state

    if (!newTodo) {
      return
    }

    this.props.mutate({
      mutation: createTodoMutation,
      variables: { content: newTodo },
      optimisticResponse: {
        todo: {
          id: Math.round(Math.random() * -1000000),
          createdAt: +new Date(),
          content: newTodo,
          __typename: 'Todo',
        }
      },
      update: (proxy, { data: { todo } }) => {
        const data = proxy.readQuery({
          query: todayQuery,
          variables: { completedAt: null },
        });

        // Add the todo
        data.todos.push(todo);

        proxy.writeQuery({
          query: todayQuery,
          variables: { completedAt: null },
          data
        });
      }
    })

    // Reset value
    this.setState({ newTodo: '' })
  }

  render () {
    const { todos } = this.props
    const { newTodo } = this.state

    return <Container>
      <form onSubmit={this.handleSubmit}>
        <Input
            onChange={this.handleChange}
            placeholder="Add an item"
            value={newTodo} />
      </form>
      {todos.map(todo => <MuTodo
          {...todo}
          key={todo.id}
          optimistic={todo.id < 0} />)}
    </Container>
  }
}

export default graphql(createTodoMutation)(MuTodoList)
