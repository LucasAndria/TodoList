import TableLux from '../components/TableLux'
import { useEffect, useState } from "react"
import { db } from '../firebase'

function useTable() {

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
        //     type:"tableau"
        // };
        // db.collection('buisnessPlanPrevisionnel').doc('FruitFrais').set(dataTable);
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
        db.collection('buisnessPlanPrevisionnel').doc('FruitFrais').collection('lignes').doc('ligne2').set(ligne);
        console.log("ligne ajouter avec succes")
    }, [])
    // */
    const persAjout = () => {
        console.log("Ajouter")
    }

    const persModif = (ligne, col) => {
        console.log(ligne, col)
    }

    return (
        <div>
            <TableLux documentRef={fruitRef} modification={true} />
        </div>
    )
}

export default useTable
