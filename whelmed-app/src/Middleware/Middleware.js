import firebase from 'firebase';
const Middleware = {
    grabUserData: function(userId){
        const userRef = firebase.database().ref().child(userId);
        userRef.on('value', snap=>{
            this.setState({
            userData: snap.val(),
            loading:!this.state.loading,
            userId: userId
            });
            Middleware.populateUserLists.call(this, snap);
        });
    },
    populateUserLists: function(snap){
        //loop over the lists associated with the user and populate the userLists object from them.
        var listKeys = Object.keys(snap.val().lists);
        listKeys.forEach((key)=>{
          var listRef= firebase.database().ref('lists').child(key);
          listRef.on('value', childSnapshot=>{
            let userLists = this.state.userLists;
            userLists[childSnapshot.key] = childSnapshot.val();
            this.setState({userLists: userLists});
          });
        })
    }
}

export default Middleware;