import firebase from 'firebase';
  const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "whelmed-app.firebaseapp.com",
    databaseURL: "https://whelmed-app.firebaseio.com",
    projectId: "whelmed-app",
    storageBucket: "",
    messagingSenderId: process.env.MESSAGING_SENDER_ID
  };
  firebase.initializeApp(config);
  export const provider = new firebase.auth.GoogleAuthProvider();
  export const auth = firebase.auth();
  export default firebase;