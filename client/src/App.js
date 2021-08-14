import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../src/App.css';

import Explore from './Components/Explore';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import ViewPost from './Components/ViewPost';
import EditPost from './Components/EditPost';
import Comment from './Components/Comment';


//GraphQL code from Unit 21 Act 26
// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

//authLink middleware code from Unit 21 Act 26
// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

//Apollo Client code from Unit 21 Act 26
const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        
{/* divs and Route exact paths go here */}

<div>Hello World</div>

      </Router>
    </ApolloProvider>
  );
}


export default App;
