import TableLux from '../components/TableLux'
import React, { useEffect, useState } from "react"
import { db } from '../firebase'
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";


function useTable() {
    // const fruitRef = db.collection('test').doc('m53acJMHSJvfjIyO3nv9');
    const fruitRef = db.collection('buisnessPlanPrevisionnel').doc('FruitFrais');

    /* set format tableau
    useEffect(() => {
        // const dataTable = {

        //     description: "tableau d'achat de matiere premieres brutes pour la transformation",
        //     headers: [
        //         { label: "Désignation" },
        //         { label: "RefMP" },
        //         {
        //             label: "Quantité",
        //             survole: "blabla",
        //             unite: "kgs"
        //         }
        //     ],
        //     type: "tableau",
        //     name: "fruit frais"
        // };
        // fruitRef.set(dataTable)
        // console.log("information table a été ajouter")

        const ligne = {
            Désignation: {
                label: "agrume 50cl",
                couleur: "blue"
            },
            RefMP: {
                label: "AGR-002",
            },
            Quantité: {
                label: "75",
                survole: "ça marche 2"
            }
        };
        const ligne2 = {
            Désignation: {
                label: "agrume 25cl",
                couleur: "yellow"
            },
            RefMP: {
                label: "AGR-001",
            },
            Quantité: {
                label: "50",
                survole: "OKKK"
            }
        };
        fruitRef.collection('lignes').add(ligne);
        fruitRef.collection('lignes').add(ligne2);
        console.log("ligne ajouter avec succes")

    }, [])
    // */
    const triggerModif = (one, two, three) => {
        console.log("modification : ", one, two, three)
    }

    return (
        <TableLux documentRef={fruitRef} modification={true} onModif={triggerModif} />
    )
}

export default useTable
