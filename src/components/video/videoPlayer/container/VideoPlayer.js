import React, { Component } from 'react'
import { TextField, Button } from 'material-ui'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'


class VideoPlayer extends Component {
    render() {

        if (this.props.data.loading) {
            return (<div>Loading</div>)
          }
        
          if (this.props.data.error) {
            console.log(this.props.data.error)
            return (<div>An unexpected error occurred</div>)
          }

        if (!this.props.data.loading) {
            return (
                <div>
                  <Title>
                    Hey {this.props.Users.username}
                  </Title>
                </div>
              )
        }
    
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

export default graphql(FEED_QUERY)(VideoPlayer)