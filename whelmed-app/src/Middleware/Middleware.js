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
            this.populateUserLists(snap);
        });
    }
}
export default Middleware;