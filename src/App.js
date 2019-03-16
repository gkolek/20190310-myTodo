import React, { Component } from 'react';
import faker from 'faker'
import { BrowserRouter, Route } from 'react-router-dom';

import { db } from './firebase';
import Register from './Register'
import Cats from './Cats'
import LogIn from './LogIn'

class App extends Component {

  state = {
    isAuthorized: false
  }

  setIsAuthorized = (value) => {
    this.setState({ isAuthorized: value })
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
          <Route exact path="/" component={Cats} />
          <Route path="/register" component={Register} setIsAuthorized={this.setIsAuthorized} />
          <Route path="/login" component={LogIn} setIsAuthorized={this.setIsAuthorized} />
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