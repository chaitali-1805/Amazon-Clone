// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCJXeCkuTiv6MSR-ClXT1FixEENgzdhxSo",
    authDomain: "clone-6a438.firebaseapp.com",
    databaseURL: "https://clone-6a438.firebaseio.com",
    projectId: "clone-6a438",
    storageBucket: "clone-6a438.appspot.com",
    messagingSenderId: "556030499283",
    appId: "1:556030499283:web:27985b760dfabea352b726",
    measurementId: "G-68T89H6YR1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };