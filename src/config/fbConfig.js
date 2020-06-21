import firebase from "firebase/app";
import "firebase/firestore"; //database
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDipawxOuBfxnD-Ig8JXbADvbBlBiN49h4",
  authDomain: "reading-list-f2bc1.firebaseapp.com",
  databaseURL: "https://reading-list-f2bc1.firebaseio.com",
  projectId: "reading-list-f2bc1",
  storageBucket: "reading-list-f2bc1.appspot.com",
  messagingSenderId: "1044375435349",
  appId: "1:1044375435349:web:9fcd3c2ca87f05201b7cdc",
  measurementId: "G-DFYWKYHGFY",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
