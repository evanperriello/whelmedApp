import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import firebaseui from 'firebaseui';
import 'react-bootstrap';
import './App.css';
import firebase from './firebase';


//project components
import AppHeader from './Components/AppHeader/AppHeader';
import ListCollection from './Components/ListCollection/ListCollection';
import Store from './Store';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Loader from './Components/Loader/Loader';


class App extends Component {
  constructor() {
    super();
    this.state = {
      userData: Store[0],
      loading:true,
      userId: null,
      userLists: {}
    };
    this.onItemSubmit = this.onItemSubmit.bind(this);
  }

  componentDidMount(){
    //sample userId for testing db connection. make dynamic on auth later.
    let userId = 'abc123';
    //grab a reference to the specified user
    const userRef = firebase.database().ref().child(userId);
    userRef.on('value', snap=>{
        this.setState({
          userData: snap.val(),
          loading:false,
          userId: userId
        });
        //loop over the lists associated with the user and populate the userLists object from them.
        var listKeys = Object.keys(snap.val().lists);
        listKeys.forEach((key)=>{
          var listRef= firebase.database().ref('lists').child(key);
          listRef.on('value', childSnapshot=>{
            let userLists = this.state.userLists;
            userLists[childSnapshot.key] = childSnapshot.val();
            this.setState({userLists: userLists});
            console.log(this.state.userLists);
          });
        })
    });
  }
  onItemSubmit(word, listId){
    let listItems = this.state.userLists.listItems;
    let newList = [...listItems, word];
    firebase.database().ref(this.state.userId + '/lists/' + listId + '/listItems/').set(newList);
  }
  render() {
    //render the loading screen until the db call goes through by the 'loading' state
    if (this.state.loading) {
      return (
          <div className="App">
            <AppHeader/>
            <Loader/>
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
