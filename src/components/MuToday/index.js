import moment from 'moment'
import React, { Component } from 'react'
import styled from 'styled-components'
import { graphql } from 'react-apollo';

import MuPrimary from 'components/MuPrimary'
import MuSecondary from 'components/MuSecondary'

import MuCalendar from 'components/MuCalendar'
import MuClock from 'components/MuClock'
import MuProgramTaskList from 'components/MuProgramTaskList'
import MuTodoList from 'components/MuTodoList'
import MuTimeline from 'components/MuTimeline'
import MuWeather from 'components/MuWeather'

import todayQuery from '~graphql/queries/today.gql'

import { grey } from 'styling/vars'

const Container = styled.div`
  display: flex;
  flex: 1;
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

class MuToday extends Component {
  constructor (props) {
    super(props)

    this.state = {
      dateFormatted: moment().format('MMMM Do, YYYY')
    }
  }

  handleCreateTask (content) {
    const { mutate } = this.props
  }

  render () {
    const {
      data: {
        loading,
        posts,
        tasks,
        todos,
      }
    } = this.props
    const { dateFormatted } = this.state

    return <Container>
      <MuPrimary>
        <Title>Today</Title>
        <Subtitle>{dateFormatted}</Subtitle>
        {!loading && todos && <MuTodoList todos={todos} />}
        {!loading && <MuProgramTaskList
            todosLeft={todos.length}
            tasks={tasks} />}
        {!loading && posts && <MuTimeline posts={posts} />}
      </MuPrimary>
      <MuSecondary>
        <MuClock />
        <MuWeather />
        <MuCalendar />
      </MuSecondary>
    </Container>
  }
}

export default graphql(
  todayQuery,
  { options: { variables: { completedAt: null } } }
)(MuToday)
