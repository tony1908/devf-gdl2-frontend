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
import ForgotPassword from './components/forgotPassword/container/ForgotPassword.js';
import VideoPlayer from './components/video/videoPlayer/container/VideoPlayer.js';

class App extends Component{


 render(){
   return (
    <Router>
      <div>
      <Route path="/" exact={true} component={Login} />
      <Route path="/home" exact={true} component={VideoCards} />
      <Route path="/logout" exact={true} component={Logout} />
      <Route path="/register" exact={true} component={Register} />
      <Route path="/forgotpassword" exact={true} component={ForgotPassword} />
      <Route path="/videoplayer" exact={true} component={VideoPlayer} />
      </div>
    </Router>
   )

 }

}

export default App;