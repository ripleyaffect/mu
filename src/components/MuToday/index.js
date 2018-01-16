import React from 'react'
import styled from 'styled-components'
import { graphql } from 'react-apollo';

import MuPrimary from 'components/MuPrimary'
import MuSecondary from 'components/MuSecondary'

import MuCalendar from 'components/MuCalendar'
import MuClock from 'components/MuClock'
import MuPost from 'components/MuPost'
import MuProgramTask from 'components/MuProgramTask'
import MuTaskList from 'components/MuTaskList'
import MuTimeline from 'components/MuTimeline'
import MuWeather from 'components/MuWeather'

import userTasksQuery from '~graphql/queries/userTasks.gql'

import { grey } from 'styling/vars'

const Container = styled.div`
  display: flex;
  flex: 1;
`

const ProgramTasks = styled.div`
  margin-bottom: 36px;
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

const MuToday = ({ data: { tasks, posts, loading } }) => {
  const lastPostIndex = loading ? 0 : posts.length - 1

  return <Container>
    <MuPrimary>
      <Title>Today</Title>
      <Subtitle>January 14th, 2017</Subtitle>
      {!loading && <MuTaskList tasks={tasks} />}
      {/* <ProgramTasks>
        <MuProgramTask />
        <MuProgramTask />
        <MuProgramTask />
      </ProgramTasks> */}
      {!loading && <MuTimeline posts={posts} />}
    </MuPrimary>
    <MuSecondary>
      <MuClock />
      <MuWeather />
      <MuCalendar />
    </MuSecondary>
  </Container>
}

export default graphql(userTasksQuery)(MuToday)
