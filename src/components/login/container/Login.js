import React, { Component } from 'react'; //una clase para que hereden de ella
import {TextField, Button} from 'material-ui';
import FacebookLogin from 'react-facebook-login';


class Login extends Component {

     responseFacebook(response) {
        //get facebook object with user data needed to send to the backend through Graph QL mutation
        console.log(response);
      }

      componentClicked(){
          console.log("Facebook button clicked");
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


export default Login; 