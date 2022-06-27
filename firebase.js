import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA-yG-GIBY09tqu6z8gvigGR2farTXxqPM",

    authDomain: "fire-emulator-lux.firebaseapp.com",

    projectId: "fire-emulator-lux",

    storageBucket: "fire-emulator-lux.appspot.com",

    messagingSenderId: "476449801757",

    appId: "1:476449801757:web:5abe98297c12b4ae51e8f4"
};

// for avoid redendency of instance of initialize app
// we we haven t previously initialize go initialize the app, in ternaire expression
const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();

export { db };


/* mampiasa getDoc

import { initializeApp } from 'firebase/app'
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore'

const firebaseConfig = {

    apiKey: "AIzaSyA-yG-GIBY09tqu6z8gvigGR2farTXxqPM",

    authDomain: "fire-emulator-lux.firebaseapp.com",

    projectId: "fire-emulator-lux",

    storageBucket: "fire-emulator-lux.appspot.com",

    messagingSenderId: "476449801757",

    appId: "1:476449801757:web:5abe98297c12b4ae51e8f4"

}

const app = initializeApp(firebaseConfig)

// connectFirestoreEmulator(db, 'localhost', 8080);

export const db = getFirestore(app) 

*/