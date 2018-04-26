import React from 'react';
import { render } from 'react-dom';
import App from './app';
import {ApolloProvider as Provider} from 'react-apollo';
import { ApolloClient} from 'apollo-client';
import { HttpLink} from 'apollo-link-http';
import { InMemoryCache} from 'apollo-cache-inmemory';

const httpLink = new HttpLink({
    uri: "https://backend-netflix-copy.herokuapp.com/graphql"
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()

});


const container = document.getElementById('container');

render(<Provider client = {client}>
        <App/>
      </Provider>
, container);