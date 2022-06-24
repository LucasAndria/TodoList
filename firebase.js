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