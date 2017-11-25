import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import 'react-bootstrap';
import './App.css';
import Firebase from './Firebase';

//project components
import AppHeader from './Components/AppHeader/AppHeader';
import ListCollection from './Components/ListCollection/ListCollection';
import Store from './Store';
import ErrorPage from './Components/ErrorPage/ErrorPage';


class App extends Component {
  constructor() {
    super();
    this.state = {
      userData: Store[0],
      loading:true
    };
    this.onItemSubmit = this.onItemSubmit.bind(this);
  }

  componentDidMount(){
  //sample userId for testing db connection. make dynamic on auth later.
  const userId = 'abc123'
  const userRef = Firebase.database().ref().child(userId);
  userRef.on('value', snap=>{
      this.setState({
        userData: snap.val(),
        loading:false
      });
  });
  }
  onItemSubmit(word){
    console.log(word);
  }
  render() {
    //render the loading screen until the db call goes through by the 'loading' state
    if (this.state.loading) {
      return (
          <div className="App">
            <AppHeader/>
            <h1>Loading...</h1>
          </div>
      );
    }
    return (
      <Router>
        <div className="App">
          <AppHeader/>
          <Route path='/' 
            exact={true} 
            render={
              ()=>{
              return (<ListCollection 
                show={3} 
                lists={this.state.userData.lists} 
                onItemSubmit={this.onItemSubmit}/>);
            }}
          />
          {/*Even though there's only one list shown in the ListId path below, it has to be served up as an array, as ListCollection uses .map.*/}
          <Route path='/:ListId' 
            render={
              ({match})=>{
                if (this.state.userData.lists[match.params.ListId]){
                  return (
                    <ListCollection
                      lists={[this.state.userData.lists[match.params.ListId]]} 
                      onItemSubmit={this.onItemSubmit}
                    />);
                }
                return <ErrorPage/>
            }
            }
        />

        </div>
      </Router>
    );
  }
}

export default App;
