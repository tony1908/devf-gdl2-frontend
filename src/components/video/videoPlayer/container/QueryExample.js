import React, { Component } from 'react'
import { TextField, Button } from 'material-ui'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { Query } from 'react-apollo';


class QueryExample extends Component {
    render() {

      return (
        <Query query={FEED_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :( </p>;
  
            return data.Users.map(({ username, email, id }) => (
              <div key={id}>
                <p>{`${username}: ${email}`}</p>
              </div>
            ));
          }}
        </Query>
      );
    
    }
}

const FEED_QUERY = gql`
{
    Users
    {
      id,
      username,
      email,
      password
    }
  }
`

export default QueryExample;