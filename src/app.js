import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

import Logout from './components/home/logout/container/Logout.js';
import Login from './components/login/container/Login.js';

class App extends Component{

 render(){
   return (
    <Router>
      <div>
      <ul>
        <li><Link to="/logout">Logout</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul> 

      <Route path="/logout" component={Logout} />
      <Route path="/login" component={Login} />
      </div>
    </Router>
   )

 }

}

export default App;