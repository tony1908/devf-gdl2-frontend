import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

import Login from './components/login/container/Login.js';
import Logout from './components/home/logout/container/Logout.js';
import VideoCards from './components/home/videoCards/container/VideoCards.js';
import Register from './components/register/container/Register.js';
import VideoPlayer from './components/video/videoPlayer/container/VideoPlayer.js';
import Uploader from './components/video/videoPlayer/container/Uploader.js';
import ReadFiles from './components/video/videoPlayer/container/ReadFiles';
import "../node_modules/video-react/dist/video-react.css"; // import css


class App extends Component{


 render(){
   return (
    <Router>
      <div>
      <Route path="/" exact={true} component={Login} />
      <Route path="/home" exact={true} component={VideoCards} />
      <Route path="/logout" exact={true} component={Logout} />
      <Route path="/register" exact={true} component={Register} />
      <Route path="/videoplayer/:value" component={VideoPlayer} />
      <Route path="/uploader" exact={true} component={Uploader} />
      <Route path="/readfiles" exact={true} component={ReadFiles} />
      </div>
    </Router>
   )

 }

}

export default App;