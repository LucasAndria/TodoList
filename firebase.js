import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA-yG-GIBY09tqu6z8gvigGR2farTXxqPM",

    authDomain: "fire-emulator-lux.firebaseapp.com",

    projectId: "fire-emulator-lux",

    storageBucket: "fire-emulator-lux.appspot.com",

    messagingSenderId: "476449801757",

    appId: "1:476449801757:web:5abe98297c12b4ae51e8f4"
};

// to avoid redendency of instance of initialize app
const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();

export { db };