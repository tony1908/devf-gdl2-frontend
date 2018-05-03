import React from 'react';
import { Link, Redirect} from 'react-router-dom';
import FormErrors from '../../../helpers/FormErrors.js'

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            submitted: false,
            formErrors: {email: '', password: ''},
            emailValid: false,
            passwordValid: false,
            formValid: false
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
        const { email, password } = this.state;
        const { dispatch } = this.props;
        if (email && password) {
            this.props.history.push('/home')
        }
    };

    validateField(fieldName, value) {  
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
      
          switch(fieldName) {
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

    render(){
        const { email, password, submitted } = this.state;
        this.handleSubmit = this.handleSubmit.bind(this);    

        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Login</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !email ? ' has-error' : '')}>
                        <label htmlFor="email">Email</label>
                        <input type="text" className="form-control" name="email" value={email} onChange={this.handleChange}/>
                        {submitted && !email &&
                            <div className="help-block">Email is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange}/>
                        {submitted && !password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Login</button>
                        <Link to="/register"> <button type="button" className ="btn btn-default" >Register</button></Link>  
                        <Link to="/forgotpassword" className="btn btn-link">Forgot Password</Link>
                        <Link to="/videoplayer" className="btn btn-link">Video Players</Link>
                        <Link to="/uploader" className="btn btn-link">Uploader</Link>
                        <Link to="/readfiles" className="btn btn-link">Read Audio Files</Link>
                    </div>
                </form>
                <div className="panel panel-default">
                    <FormErrors formErrors={this.state.formErrors} />
                </div>
            </div>
        );
    }
}

export default Login;