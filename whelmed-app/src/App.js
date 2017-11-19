import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import 'react-bootstrap';
import './App.css';
import Firebase from './Firebase';

//project components
import AppHeader from './Components/AppHeader/AppHeader';
import ListCollection from './Components/ListCollection/ListCollection';
import Store from './Store';


class App extends Component {
  constructor() {
    super();
    this.state = {
      userData: Store[0]
    };
  }

  componentDidMount(){
  //sample userId for testing db connection. make dynamic on auth later.
  const userId = 'abc123'
  const userRef = Firebase.database().ref().child(userId);
    userRef.on('value', snap=>{
        this.setState({
          userData: snap.val()
        });
    });
  }
  render() {
    console.log(this.state.userData);
    return (
      <Router>
        <div className="App">
          <AppHeader/>
          <Route path='/' 
            exact={true} 
            render={
              ()=>{
              return (<ListCollection show={3} lists={this.state.userData.lists}/>);
            }}
          />
          <Route path='/:ListId' 
          render={
            ({match})=><ListCollection lists={Store.find(user=> user.userId === '123abc').lists}/>
          }
        />

        </div>
      </Router>
    );
  }
}

export default App;
