import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import firebaseui from 'firebaseui';
import './App.css';
import firebase, {auth, provider} from './firebase';


//project components
import AppHeader from './Components/AppHeader/AppHeader';
import ListCollection from './Components/ListCollection/ListCollection';
import Store from './Store';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Loader from './Components/Loader/Loader';
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
    let userId = 'abc123';
    //have to use call to make sure that 'this' is the current context.
    Middleware.grabUserData.call(this, userId);
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
