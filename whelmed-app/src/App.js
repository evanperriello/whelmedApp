import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import './App.css';
import firebase, {auth, provider} from './firebase';


//project components
import AppHeader from './Components/AppHeader/AppHeader';
import ListCollection from './Components/ListCollection/ListCollection';
import Store from './Store';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Loader from './Components/Loader/Loader';
import SingleList from './Components/SingleList/SingleList';
import Middleware from './Middleware/Middleware';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userData: Store[0],
      loading:true,
      user: null,
      userLists: {}
    };
    this.onItemSubmit = this.onItemSubmit.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }
  componentDidMount(){
    //sample userId for testing db connection. make dynamic on auth.
    var userId = this.state.user || 'abc123';
    //have to use call to make sure that 'this' is the current context.
    Middleware.grabUserData.call(this, userId);
    auth.onAuthStateChanged((user)=>{
      if (user){
        this.setState({user});
        userId = user.uid;
        //Have to check whether user exists in firebase already and, if not, create a new listing with blank data structured properly
        //Middleware.grabUserData.call(this, userId);
      }
    });
    

  }
  login(){  
    auth.signInWithPopup(provider) 
    .then((result) => {
      const user = result.user;
      this.setState({
        user
      });
    });
  }
  logout(){
    auth.signOut().then(
      ()=>{
        this.setState({user:null});
      }
    );
  }
  onItemSubmit(word, listId){
    let listItems = this.state.userLists[listId].listItems;
    let newList = [...listItems, word];
    firebase.database().ref(`lists/${listId}/listItems/`).set(newList);
  }
  render() {
   // render the loading screen until the db call goes through by the 'loading' state
    if (this.state.loading) {
      return (
          <div className="App">
            <AppHeader user={this.state.user} login={this.login} logout={this.logout}/>
            <Loader/>
          </div>
      );
    }
    return (
      <Router>
        <div className="App">
          <AppHeader user={this.state.user} login={this.login} logout={this.logout}/>
          <Route path='/' 
            exact={true} 
            render={
              ()=>{
              return (<ListCollection 
                show={3} 
                lists={this.state.userLists} 
                onItemSubmit={this.onItemSubmit}/>
              );
            }}
          />
          <Route path='/:ListId' 
            render={
              (props)=>{
                return (<SingleList
                  match={props.match}
                  userData={this.state.userData} 
                  userLists={this.state.userLists}
                  onItemSubmit={this.onItemSubmit}/>
                );
              }
            }
          
          />

        </div>
      </Router>
    );
  }
}

export default App;
