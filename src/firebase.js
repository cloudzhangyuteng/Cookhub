// src/firebase.js
import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA6WsPF0_plM5Eyg96ECePsLVDPHt-ma2E",
  authDomain: "cs180-cookhub.firebaseapp.com",
  databaseURL: "https://cs180-cookhub.firebaseio.com",
  projectId: "cs180-cookhub",
  storageBucket: "cs180-cookhub.appspot.com",
  messagingSenderId: "80876696915",
  appId: "1:80876696915:web:4dd76b419eb216b16cdda6",
  measurementId: "G-PHSTBGHZ0Q"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
