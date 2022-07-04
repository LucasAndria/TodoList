import { onSnapshot } from "firebase/firestore"
import { db } from '../../../firebase'
import { useCollection, useDocument } from 'react-firebase-hooks/firestore'


const createDataStorage = (colRef, data) => {
    const formatedData = {
        name: data.name,
        type: data.type,
        description: data.description,
        headers: data.type === "tableau" ? data.headers : null,
        lignes: data.lignes
    };
    colRef.add(formatedData)
}

const getDataStorage = (docRef, option) => {
    const [docData, loading, error] = useDocument(docRef, option)

    return [docData?.data(), loading, error, docData?.id]
}

const addDocLigne = (docRef, ...obj) => {
    let formatedLigne = {}
    for (let i in obj) {
        formatedLigne = { ...formatedLigne, ...obj[i] }
    }
    const res = docRef.collection('lignes').add(formatedLigne);

    return res
}

const addMapLigne = (docRef, ...obj) => {
    console.log("try add Map ligne", docRef, ...obj)
}

const getLignes = (colRef, option) => {

    const [cols, loading, error] = useCollection(colRef, option)

    let Lignes = []

    //simplification pour la récuperation des données
    cols?.forEach(col => {
        Lignes.push({ id: col.id, data: col.data() })
    });

    return [Lignes, loading, error]
}

async function updateLigne(docRef, ligneId, col, val) {
    var tmp = col + ".label"
    await docRef.collection('lignes').doc(ligneId).update({ [tmp]: val });
}

async function deleteColLigne(docRef, ligneId) {
    await docRef.collection("lignes").doc(ligneId).delete()
}

async function deleteMapLigne(docRef, ligneId) {
    // await docRef.collection("lignes").doc(ligneId).delete()
}

export { createDataStorage, addMapLigne, addDocLigne, getLignes, getDataStorage, updateLigne, deleteColLigne };