import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCwWKyPud_1x8XTU1Sz3nBMyC67avOZ3Hc",
    authDomain: "sprint5-e28b5.firebaseapp.com",
    databaseURL: "https://sprint5-e28b5.firebaseio.com",
    projectId: "sprint5-e28b5",
    storageBucket: "sprint5-e28b5.appspot.com",
    messagingSenderId: "632236555665",
    appId: "1:632236555665:web:8717ad6bb0b790e2436e30",
    measurementId: "G-M5WMYCEKXQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;