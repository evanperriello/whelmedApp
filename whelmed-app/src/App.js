import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import 'react-bootstrap';
import './App.css';

//project components
import ListCollection from './Components/ListCollection/ListCollection';

var sampleLists = [{text: 'Pet the cat', id: 1}, {text: 'Hug your wife', id:2}, {text: 'Code the app', id: 3}, {text: 'Make dinner.', id: 4}];

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">whelmed</h1>
          </header>
          <p className="App-intro">
            Big goals, small steps.
          </p>
          <Route path='/' render={
            ()=><ListCollection lists={sampleLists}/>
          }
          />
        </div>
      </Router>
    );
  }
}

export default App;
