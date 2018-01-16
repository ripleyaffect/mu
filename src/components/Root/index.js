import gql from 'graphql-tag'
import React from 'react'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { ApolloProvider } from 'react-apollo'

const uri = 'https://api.graph.cool/simple/v1/mu'

const client = new ApolloClient({
  link: new HttpLink({ uri }),
  cache: new InMemoryCache()
});

import App from 'components/App'

const Root = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)

export default Root
