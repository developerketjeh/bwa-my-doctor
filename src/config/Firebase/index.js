// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1phYQHkyUiEnd-fBzFk5Wywh57Mja5r4",
  authDomain: "my-doctor-b1803.firebaseapp.com",
  projectId: "my-doctor-b1803",
  storageBucket: "my-doctor-b1803.appspot.com",
  messagingSenderId: "195850833477",
  appId: "1:195850833477:web:8f99e6491f775495775d2c",
};

// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;