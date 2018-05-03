import React, { Component } from 'react'
import { Player } from 'video-react';
import audioFiles from './ReadFiles.js';



class VideoPlayer extends Component {

   componentWillMount() {
     console.log(this.props);
   }

    render() {
    ;

      return (
         //<span>{this.props.match.params.value}</span>
         <Player
           playsInline
           src= { decodeURIComponent(this.props.match.params.value) }
          
        />
      );
    }
}

export default VideoPlayer;
