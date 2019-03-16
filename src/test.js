import React, { Component } from 'react';

import { db } from './firebase';


class App extends Component {

    state = {
        cats:[]
    }

  componentDidMount() {
    db.ref('/cats').set({ name: 'garfield' });
    db.ref('/numbers').set([11, 12, 13]);
    // db.ref('/cats').remove(); // same as:  db.ref('/cats').set(null);

    db.ref('/cats/').on('value', (snapshot) => {
      const cats = [];
      Object.entries(snapshot.val()).forEach(elem => {
        const cat = {
          id: elem[0],
          ...elem[1]
        }
        cats.push(cat);
      });
      this.setState({ cats });
    });
  }

  render() {
    const { cats } = this.state;
    return (
      <div className="App">
        <ul>
          {cats.map(cat => (
            <li key={cat.id}>{cat.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
