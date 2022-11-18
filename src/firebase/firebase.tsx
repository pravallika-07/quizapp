import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAZc-7JKWvgWtrTU0tRqTvl6PFpvSCFiio",
    authDomain: "signin-27c20.firebaseapp.com",
    projectId: "signin-27c20",
    storageBucket: "signin-27c20.appspot.com",
    messagingSenderId: "143828775064",
    appId: "1:143828775064:web:1aadbd4792cd350403e0ed"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export {firebase}