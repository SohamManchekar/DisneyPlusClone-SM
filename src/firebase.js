import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyD4d9Wlsrv_g78j26nwg7vKtLmpWjZ9TH4",
    authDomain: "disneyplus-clone-94209.firebaseapp.com",
    projectId: "disneyplus-clone-94209",
    storageBucket: "disneyplus-clone-94209.appspot.com",
    messagingSenderId: "978750787825",
    appId: "1:978750787825:web:7eda1d03bcebd0bf0f9950",
    measurementId: "G-G72X5BY3NV"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth, provider, storage};
export default db;