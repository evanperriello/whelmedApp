import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import 'react-bootstrap';
import './App.css';
import AppHeader from './Components/AppHeader/AppHeader';

//project components
import ListCollection from './Components/ListCollection/ListCollection';

var sampleLists = [{text: 'Pet the cat', id: 1}, {text: 'Hug your wife', id:2}, {text: 'Code the app', id: 3}, {text: 'Make dinner.', id: 4}];

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <AppHeader/>
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
