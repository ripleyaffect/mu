import gql from 'graphql-tag'
import React from 'react'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { ApolloProvider } from 'react-apollo'

import userTasksQuery from '~graphql/queries/userTasks.gql'

const uri = 'https://api.graph.cool/simple/v1/mu'

const client = new ApolloClient({
  link: new HttpLink({ uri }),
  cache: new InMemoryCache()
});

client.query({ query: userTasksQuery }).then(result => console.log(result.data))

import App from '../App'

const Root = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)

export default Root
