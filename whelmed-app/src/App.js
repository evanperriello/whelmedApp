import React, { Component } from 'react';
import 'react-bootstrap';

import './App.css';

//project components
import List from './Components/List/List';
var sampleListItems = ['Pet the cat', 'Hug your wife', 'Code the app'];
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
          <List listItems={sampleListItems} title={'Things To Do'} />
      </div>
    );
  }
}

export default App;
