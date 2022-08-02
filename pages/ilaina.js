import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { collection, getDocs, addDoc, doc, deleteDoc } from 'firebase/firestore'

//Tsy azo aparitaka ito fa izay tokony hicode miaraka aminao ian no tokony mafantatra anito
const firebaseConfig = {
    apiKey: "AIzaSyDOdtm3JnbIkjUzonaMzU8jZEJgDZ0WDNc",

    authDomain: "api-test-301ea.firebaseapp.com",

    projectId: "api-test-301ea",

    storageBucket: "api-test-301ea.appspot.com",

    messagingSenderId: "838627365601",

    appId: "1:838627365601:web:6ec9c32737390688241da0"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();

async function recup() {

    var res = [];

    const querySnapshot = await getDocs(collection(db, "todos"));

    querySnapshot.forEach((doc) => {
        res.push({ ...doc.data(), ...{ id: doc.id } })
    });

    return res
}


async function ajouter(value) {

    const docRef = await addDoc(collection(db, "todos"), value);

}

async function supprimer(index) {
    await deleteDoc(doc(db, "todos", index));
}

export { recup, ajouter, supprimer }