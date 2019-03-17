import React, { Component } from 'react';

import { auth } from './firebase'


class LogOut extends Component {

    componentDidMount(){
        auth.signOut()
        .then(response=>{
            this.props.setIsAuthorized(false)
            this.props.history.push('/')
        })
    }


    render() {
        return (
            <div></div >

        )
    }


}
export default LogOut