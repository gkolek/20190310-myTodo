import React, { Component } from 'react';

import { auth, googleProvider, facebookProvider } from './firebase'


class LogIn extends Component {

    state = {
        email: '',
        password: ''
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
        //this.setState({ email: gkolek@gazeta.pl })
        //this.setState({ password:alamakota })
    }

    handleSubmit = (event) => {
        auth.signInWithEmailAndPassword(this.state.email, this.state.password
        )
            .then(response => {
                console.log('Response: ', response);
                this.props.setIsAuthorized(true);
                this.props.history.push('/')
            })
            .catch(error => {
                console.error((`error: ${error.code} ${error.message}`));
            })

        console.log(this.state)
        this.setState({ email: '', password: '' })
        event.preventDefault()
    }

    handleGoogleLogin = () => {
        auth
            .signInWithPopup(googleProvider)
            .then(response => {
                console.log('Response: ', response);
                this.props.history.push('/')
            })
            .catch(error => {
                console.error((`error: ${error.code} ${error.message}`));
            })
    }
    handleFacebookLogin = () => {
        auth
            .signInWithPopup(facebookProvider)
            .then(response => {
                console.log('Response: ', response);
                this.props.history.push('/')
            })
            .catch(error => {
                console.error((`error: ${error.code} ${error.message}`));
            })
    }

    render() {
        return (
            <div>
                <h2>Login:</h2>
                <div>
                    <button onClick={this.handleGoogleLogin}>by-Google-login</button>
                </div>
                <div>
                    <button onClick={this.handleFacebookLogin}>by-Facebook-login</button>
                </div>
                <form onSubmit={this.handleSubmit} >
                    <div>
                        <input
                            onChange={this.handleChange}
                            value={this.state.email}
                            type="email"
                            name="email"
                            placeholder="E-mail" />
                    </div>
                    <div>
                        <input
                            onChange={this.handleChange}
                            value={this.state.password}
                            type="password"
                            name="password"
                            placeholder="Password" />
                    </div>
                    <div>
                        <button>Submit-button</button>
                        <input type="submit" value="Submit-input" />
                    </div>

                </form>
            </div >

        )
    }


}
export default LogIn