import React from 'react';
import { Link } from 'react-router-dom';
import FormErrors from '../../../helpers/FormErrors.js'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            email: '',
            password: '',
            formErrors: {userName:'', email: '', password: ''},
            userNameValid: false,
            emailValid: false,
            passwordValid: false,
            formValid: false,
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({[name]: value}, 
            () => { this.validateField(name, value) });
    }


    handleSubmit(e){
        e.preventDefault();
        
        this.setState({ submitted: true });
        const { userName, email, password } = this.state;
        
        this.props.signupMutation({
            variables: { us: {
                username: userName,
                email: email,
                password: password
              }
            }
          })
            .then(({ data }) => {
              console.log('got data', data);
            }).catch((error) => {
              console.log('there was an error sending the query', error);
            });

    };

    validateField(fieldName, value) {  
        let fieldValidationErrors = this.state.formErrors;
        let userNameValid = this.state.userNameValid;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
      
          switch(fieldName) {
            case 'userName':
                userNameValid = value.length >= 2;
                fieldValidationErrors.userName = userNameValid ? '': ' is too short';
                break;
            case 'email':
              emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
              fieldValidationErrors.email = emailValid ? '' : ' is invalid';
              break;
            case 'password':
              passwordValid = value.length >= 6;
              fieldValidationErrors.password = passwordValid ? '': ' is too short';
              break;
            default:
              break;
          }
          this.setState({formErrors: fieldValidationErrors,
                          emailValid: emailValid,
                          passwordValid: passwordValid
                        }, this.validateForm);
        }
        
         validateForm() {
          this.setState({formValid: this.state.emailValid && this.state.passwordValid});
        }

    render() {
        const { userName, email, password, submitted } = this.state;
        this.handleSubmit = this.handleSubmit.bind(this);   

        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Register</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !userName ? ' has-error' : '')}>
                        <label htmlFor="userName">User Name</label>
                        <input type="text" className="form-control" name="userName" value={userName} onChange={this.handleChange} />
                        {submitted && !userName &&
                            <div className="help-block">User Name is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !email ? ' has-error' : '')}>
                        <label htmlFor="email">Email</label>
                        <input type="text" className="form-control" name="email" value={email} onChange={this.handleChange} />
                        {submitted && !email &&
                            <div className="help-block">Email is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                        {submitted && !password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Register</button>
                        <Link to="/" className="btn btn-link">Cancel</Link>
                    </div>
                </form>
                <div className="panel panel-default">
                    <FormErrors formErrors={this.state.formErrors} />
                </div>
            </div>
        );
    }
}

const SIGNUP_MUTATION= gql`
mutation User ($us: userInput!) {
  User(user:$us) {
        username,
        email,
        password
    }
}
`

export default compose(
    graphql(SIGNUP_MUTATION, { name: 'signupMutation' }),
  )(Register)