import React, { Component } from 'react';
import FBLogin from './components/login/FacebookLogin.js';
import Login from './components/login/container/Login.js'

class App extends Component {

 render() {
   return (
      <div>
        <FBLogin/>
      </div>
    
   )

 }

}

export default App;