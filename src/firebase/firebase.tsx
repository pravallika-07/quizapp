import { initializeApp} from 'firebase/app'
// import {getFirestore} from '@firebase/firestore'
import {getAuth} from 'firebase/auth';
import {initializeFirestore} from 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyAZc-7JKWvgWtrTU0tRqTvl6PFpvSCFiio",
    authDomain: "signin-27c20.firebaseapp.com",
    projectId: "signin-27c20",
    storageBucket: "signin-27c20.appspot.com",
    messagingSenderId: "143828775064",
    appId: "1:143828775064:web:1aadbd4792cd350403e0ed"
  };
  
  // Initialize Firebase
  // const app = initializeApp(firebaseConfig);

  // export const db = getFirestore(app);

  const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export {auth, db};