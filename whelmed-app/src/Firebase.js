import Firebase from 'firebase';
  const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "whelmed-app.firebaseapp.com",
    databaseURL: "https://whelmed-app.firebaseio.com",
    projectId: "whelmed-app",
    storageBucket: "",
    messagingSenderId: process.env.MESSAGING_SENDER_ID
  };
  Firebase.initializeApp(config);

  export default Firebase;