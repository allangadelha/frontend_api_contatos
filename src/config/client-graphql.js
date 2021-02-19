import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

// HTTP connection to the API
const httpLink = createHttpLink({
    // You should use an absolute URL here
    uri: 'http://localhost:4000',
  })
  
  // Cache implementation
  const cache = new InMemoryCache()
  
  // Create the apollo client
  const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
  })
  

  const consumirAPI = async (graphqlEndpoint, query, variables = {}) => {
    const response = await fetch(graphqlEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables })
    });
  
    return response.json();
  }
  
  const GRAPHQL_ENDPOINT = 'http://localhost:4000/'
  
  const consultarTodosQuery = `
  query {
    contatos {
        id
        nome
        email
        telefone
    }
  }
  `;
  
  consumirAPI(GRAPHQL_ENDPOINT, consultarTodosQuery).then(console.log);
