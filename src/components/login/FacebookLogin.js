import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
 
class MyComponent extends Component {
   
  responseFacebook(response) {
    console.log(response);
  }

  componentClicked() {
    console.log("click")
  }

  render() {

    return (
      <div>
        <FacebookLogin
        appId="121582495367066"
        autoLoad={true}
        fields="name,email,id"
        onClick={this.componentClicked}
        callback={this.responseFacebook} 
      />
      </div>
    )
  }

}

export default MyComponent;