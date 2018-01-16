import React, { Component } from 'react'
import styled from 'styled-components'
import { graphql } from 'react-apollo'

import completeTaskMutation from '~graphql/mutations/completeTask.gql'
import todayQuery from '~graphql/queries/today.gql'
import { black, grey } from 'styling/vars'

const Container = styled.button`
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
  text-align: left;
  line-height: 24px;

  :hover, :focus {
    outline: none;
    text-decoration: line-through;
  }
`

class MuTask extends Component {
  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (event) {
    const { id, mutate } = this.props
    const completedAt = new Date().toISOString()

    this.props.mutate({
      mutation: completeTaskMutation,
      variables: { id, completedAt },
      optimisticResponse: {
        task: {
          id,
          completedAt,
          __typename: 'Task',
        }
      },
      update: (proxy, { data: { task } }) => {
        const data = proxy.readQuery({
          query: todayQuery,
          variables: { completedAt: null },
        });

        // remove the task
        data.tasks = data.tasks.filter(task => task.id !== id);

        proxy.writeQuery({
          query: todayQuery,
          variables: { completedAt: null },
          data,
        });
      }
    })
  }

  render () {
    const { content } = this.props

    return <Container onClick={this.handleClick}>
      {content}
    </Container>
  }
}

export default graphql(completeTaskMutation)(MuTask)
