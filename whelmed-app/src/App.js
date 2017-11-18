import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import 'react-bootstrap';
import './App.css';

//project components
import AppHeader from './Components/AppHeader/AppHeader';
import ListCollection from './Components/ListCollection/ListCollection';
import Store from './Store';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <AppHeader/>
          <Route path='/' 
            exact={true} 
            render={
              ()=>{
              return (<ListCollection show={3} lists={Store.find(user=> user.userId === '123abc').lists}/>);
            }}
          />
          <Route path='/:ListId' 
          render={
            ({match})=><ListCollection lists={Store.find(user=> user.userId === '123abc').lists.find(list=>list.ListId===match.params.ListId)}/>
          }
        />

        </div>
      </Router>
    );
  }
}

export default App;
