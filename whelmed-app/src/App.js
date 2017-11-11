import React, { Component } from 'react';
import 'react-bootstrap';

import './App.css';

//project components
import ListItem from './Components/ListItem/ListItem';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">whelmed</h1>
        </header>
        <p className="App-intro">
          Big goals, small steps.
        </p>
          <ListItem/>
      </div>
    );
  }
}

export default App;
