import React from 'react'
import styled from 'styled-components'
import { graphql } from 'react-apollo';

import MuTaskList from 'components/MuTaskList'
import MuPost from 'components/MuPost'
import MuProgramTask from 'components/MuProgramTask'

import userTasksQuery from '~graphql/queries/userTasks.gql'

import { grey } from 'styling/vars'

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

const MuDay = ({ data: { tasks, posts, loading } }) => {
  const lastPostIndex = loading ? 0 : posts.length - 1

  return <Container>
    <Title>Today</Title>
    <Subtitle>January 14th, 2017</Subtitle>
    {!loading && <MuTaskList tasks={tasks} />}
    {/* <ProgramTasks>
      <MuProgramTask />
      <MuProgramTask />
      <MuProgramTask />
    </ProgramTasks> */}
    {!loading && <Posts>
      {posts.map((post, index) => <MuPost
          {...post}
          isLast={index === lastPostIndex}
          key={post.id} />)}
    </Posts>}
  </Container>
}

export default graphql(userTasksQuery)(MuDay)
