import firebase from 'firebase'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyC5LQAPyT8F2AVzmdih1IBNHgqPtqnRhCY",
    authDomain: "clone-1a782.firebaseapp.com",
    databaseURL: "https://clone-1a782.firebaseio.com",
    projectId: "clone-1a782",
    storageBucket: "clone-1a782.appspot.com",
    messagingSenderId: "329904553082",
    appId: "1:329904553082:web:eacd6b3e28a15e4d768fc3",
    measurementId: "G-YME9HR5DK4"
});

// const db = firebaseConfig.firestore()
const auth = firebase.auth()

export { auth }