// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7enk_2OZM1-oDC4BqhHeaP-AJEfgvFFg",
  authDomain: "mydoctor-69cff.firebaseapp.com",
  projectId: "mydoctor-69cff",
  storageBucket: "mydoctor-69cff.appspot.com",
  messagingSenderId: "4796081623",
  appId: "1:4796081623:web:5aecfd5f351fd7454b5792",
  databaseURL: "https://mydoctor-69cff-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;