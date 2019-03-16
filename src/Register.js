import React, { Component } from 'react';

import { auth } from './firebase'


class Register extends Component {

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
        auth.createUserWithEmailAndPassword(this.state.email, this.state.password
        )
            .then(response => {
                console.log('Response: ', response);
                this.props.setIsAuthorized(true);
            })
            .catch(error => {
                console.error((`error: ${error.code} ${error.message}`));
            })

        console.log(this.state)
        this.setState({ email: '', password: '' })
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <h2>Register:</h2>
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
export default Register