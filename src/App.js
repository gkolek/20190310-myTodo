import React, { Component } from 'react';
import faker from 'faker'
import { BrowserRouter, Route, Link } from 'react-router-dom';

import { db } from './firebase';
import Register from './Register'
import Cats from './Cats'
import LogIn from './LogIn'
import LogOut from './LogOut'

import {auth} from './firebase'
class App extends Component {

  state = {
    isAuthorized: false
  }

  setIsAuthorized = (value) => {
    this.setState({ isAuthorized: value })
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ isAuthorized: true });
      } else {
        this.setState({ isAuthorized: false });
      }
    })

  }

  // renderCatsComponent() {
  //   if (this.state.isAuthorized)
  //     return <Cats />
  // }

  render() {
    // const catsComponent = this.state.isAuthorized ? <Cats /> : null
    return (
      <BrowserRouter>
        <div>
          <div>
            <Link to="/">Home </Link>
            <Link to="/register">Register </Link>
            <Link to="/login">Login </Link>
            <Link to="/logout">Logout </Link>
          </div>
          <Route exact path="/" component={this.state.isAuthorized ? Cats : null} />

          <Route path="/register" render={
            (props) => <Register {...props} setIsAuthorized={this.setIsAuthorized} />
          } />
          <Route path="/login" render={
            (props) => <LogIn {...props} setIsAuthorized={this.setIsAuthorized} />
          } />
          <Route path="/logout" render={
            (props) => <LogOut {...props} setIsAuthorized={this.setIsAuthorized} />
          } />

          {/* <Route path="/register" component={Register} setIsAuthorized={this.setIsAuthorized} /> */}
          {/* <Route path="/login" component={LogIn} setIsAuthorized={this.setIsAuthorized} /> */}

          {/* <Register setIsAuthorized={this.setIsAuthorized} />
          {this.state.isAuthorized ? <Cats /> : null} */}
          {/* <LogIn setIsAuthorized={this.setIsAuthorized} />
          {this.state.isAuthorized ? <Cats /> : null} */}

          {/* {catsComponent} */}
          {/* {this.renderCatsComponent} */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;