import React, { Component } from 'react'
import { Player } from 'video-react';

class VideoPlayer extends Component {
    render() {
      return (
        <Player
          playsInline
          src="https://res.cloudinary.com/devapps404/video/upload/v1525135053/ES_882_01_01_XR25R.mp4"
       />
      );
    }
}

export default VideoPlayer;
