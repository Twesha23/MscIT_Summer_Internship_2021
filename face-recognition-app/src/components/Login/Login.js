import React from 'react';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loginEmail: '',
            loginPassword: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({loginEmail: event.target.value});
    }

    onPasswordChange = (event) => {
        this.setState({loginPassword: event.target.value});
    }

    onLoginSubmit = () => {
        fetch('http://localhost:3000/login', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.loginEmail,
                password: this.state.loginPassword
            })
        })
            .then(response => response.json())
            .then(data => {
                if(data !== 'Login unsuccessful'){
                    this.props.loadUser(data);
                    this.props.onRouteChange('home');
                }
                    
            })
    }

    render(){
        const {onRouteChange} = this.props;
        return (
            <article className="br3 ba bg-white-30 b--black-10 mv4 w-100 w-50-m w-50-l mw6 shadow-5 center mr10">
            <main className="pa4 black-80 w-80">
            <div className="measure">
                <fieldset className="ba b--transparent ph0 mh0">
                <legend className="f1 fw6 ph0 mh0">Login</legend>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                    <input
                    className="pa2 input-reset ba bg-white-60 hover-bg-black hover-white w-100"
                    type="email"
                    name="email-address"
                    id="email-address"
                    onChange={this.onEmailChange}
                    />
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                    <input
                    className="b pa2 input-reset ba bg-white-60 hover-bg-black hover-white w-100"
                    type="password"
                    name="password"
                    id="password"
                    onChange={this.onPasswordChange}
                    />
                </div>
                </fieldset>
                <div className="">
                <input
                    onClick={this.onLoginSubmit}
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4 dib"
                    type="submit"
                    value="Log in"
                />
                </div>
                <div className="lh-copy mt3">
                <p  onClick={() => onRouteChange('register')} className="f4 b link grow black db pointer">Register</p>
                </div>
            </div>
            </main>
        </article>
        );
    }
}

export default Login;