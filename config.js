import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyB7MqbtHf-QWWJC5ApkafHJhTMyb8Kc1tE",
    authDomain: "ride-e1e86.firebaseapp.com",
    projectId: "ride-e1e86",
    storageBucket: "ride-e1e86.appspot.com",
    messagingSenderId: "281381751835",
    appId: "1:281381751835:web:36902e0e521e6a33ca7cbe"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
