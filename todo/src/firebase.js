import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC6Dw0Urbu6RyPjw30PFaFpRHbxkbnRFGA",
    authDomain: "todo-app-f9afe.firebaseapp.com",
    projectId: "todo-app-f9afe",
    storageBucket: "todo-app-f9afe.appspot.com",
    messagingSenderId: "639274402362",
    appId: "1:639274402362:web:e2012cead7a2fcc8b92b03",
    measurementId: "G-QR2YRQEJMZ"
});

const db = firebase.firestore();

export default db;