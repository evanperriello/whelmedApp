import React, { Component } from 'react';
import 'react-bootstrap';

import './App.css';

//project components
import ListItemButtons from './Components/ListItemButtons';

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
          <ListItemButtons/>
      </div>
    );
  }
}

export default App;
