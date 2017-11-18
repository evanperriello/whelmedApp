import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import 'react-bootstrap';
import './App.css';
import AppHeader from './Components/AppHeader/AppHeader';

//project components
import ListCollection from './Components/ListCollection/ListCollection';

var sampleLists = [
    {
    username: 'Evan',
    userId: 'abc123', 
    lists: [
      {
        ListId: 1,
        title: 'Things to do 1',
        daysStraight: '5',
        numberDone: '75',
        listItems: [{text: 'Pet the cat', id: 1}, {text: 'Hug your wife', id:2}, {text: 'Code the app', id: 3}, {text: 'Make dinner.', id: 4}]
      },
      {
        ListId: 2,
        title: 'Things to do 2',
        daysStraight: '6',
        numberDone: '20',
        listItems: [{text: 'Feed the cat', id: 1}, {text: 'Kiss your wife', id:2}, {text: 'Code the app more', id: 3}, {text: 'Make dinner.', id: 4}]
      }

    ]
  },
  {
    username: 'Evan2',
    userId: '123abc', 
    lists: [
      {
        ListId: 1,
        title: 'Things to do 3',
        daysStraight: '5',
        numberDone: '75',
        listItems: [{text: 'Pet the cat', id: 1}, {text: 'Hug your wife', id:2}, {text: 'Code the app', id: 3}, {text: 'Make dinner.', id: 4}]
      },
      {
        ListId: 2,
        title: 'Things to do 4',
        daysStraight: '6',
        numberDone: '20',
        listItems: [{text: 'Feed the cat', id: 1}, {text: 'Kiss your wife', id:2}, {text: 'Code the app more', id: 3}, {text: 'Make dinner.', id: 4}]
      }
    ]
  }
];
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
              return (<ListCollection show={3} lists={sampleLists.find(user=> user.userId === '123abc').lists}/>);
            }}
          />
          <Route path='/:ListId' 
          render={
            ({match})=><ListCollection lists={sampleLists[match.params.ListId]}/>
          }
        />

        </div>
      </Router>
    );
  }
}

export default App;
