import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBMMZ1rYySA1fEh385nIXcatvuQ3Lx_XjA",
    authDomain: "instagramart17.firebaseapp.com",
    projectId: "instagramart17",
    storageBucket: "instagramart17.appspot.com",
    messagingSenderId: "744620068492",
    appId: "1:744620068492:web:5972a462a5d34e486fb5a9"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const firestore = firebaseApp.firestore();
const storage = firebase.storage();

export{
    storage, firestore as default
} 