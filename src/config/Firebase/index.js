import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA7enk_2OZM1-oDC4BqhHeaP-AJEfgvFFg",
    authDomain: "mydoctor-69cff.firebaseapp.com",
    projectId: "mydoctor-69cff",
    storageBucket: "mydoctor-69cff.appspot.com",
    messagingSenderId: "4796081623",
    appId: "1:4796081623:web:5aecfd5f351fd7454b5792"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const Firebase = firebase;

export default Firebase;
