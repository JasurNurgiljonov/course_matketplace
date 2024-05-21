import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB9fYWAmGYScGPmk9IaGVVS1C_zeWKyrUA",
    authDomain: "production-practice.firebaseapp.com",
    projectId: "production-practice",
    storageBucket: "production-practice.appspot.com",
    messagingSenderId: "363082518181",
    appId: "1:363082518181:web:134a4f29e9e08e36e9074c",
    measurementId: "G-N07RM2XGJ1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth, provider, storage};
export default db;