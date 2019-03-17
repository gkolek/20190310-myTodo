const firebase = require('firebase');

const config = {
    apiKey: "AIzaSyAZZNJIBgn5GkI9M9ixcaKOk-Y3C91vIWk",
    authDomain: "my-first-firebase-5d29b.firebaseapp.com",
    databaseURL: "https://my-first-firebase-5d29b.firebaseio.com",
    projectId: "my-first-firebase-5d29b",
    storageBucket: "my-first-firebase-5d29b.appspot.com",
    messagingSenderId: "16259240038"
  };

const app = firebase.initializeApp(config);
export const db = app.database();

export const auth = app.auth();

export const googleProvider = new firebase.auth.GoogleAuthProvider()

export const facebookProvider = new firebase.auth.FacebookAuthProvider()
