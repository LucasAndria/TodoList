import { useState, useEffect } from "react"
// import TableLoader from './modules/TableLoader';
import Modification from './modules/Modification'
import Confirmation from "./modules/Confirmation"
import Header from "./Header"
import Ligne from "./Ligne"
import { createDataStorage, addColLigne, getLignes, getDataStorage, updateLigne, deleteColLigne } from './config/reqFirebase'
import { db } from "../../firebase"

function TableLux({ documentRef, modification = false, onModif, onAdd, onSupp }) {


    // const [lignes, setLignes] = useState()
    const [dataTable, loadingTable, errorTable, idTable] = getDataStorage(documentRef)

    const [lignes, loadingLignes, errorLignes] = getLignes(documentRef.collection("lignes"))

    // useEffect(() => {
    //     const ligneType = typeof dataTable?.lignes
    //     ligneType === "string" && setLignes(snapShotLignes)
    //     ligneType === "object" && setLignes(dataTable.lignes)
    // }, [loadingLignes, loadingTable])

    useEffect(() => {

        const dataTable = {
            name: "fruit frais",
            type: "tableau",
            description: "tableau d'achat de matiere premieres brutes pour la transformation",
            headers: [
                { label: "Désignation" },
                { label: "RefMP" },
                {
                    label: "Quantité",
                    survole: "blabla",
                    unite: "kgs"
                }
            ],
            lignes: [
                {
                    id: "1",
                    data: {
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
                    }
                },
                {
                    id: 2,
                    data: {
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
                    }
                }
            ]
        };
        // createDataStorage(db.collection('test'), dataTable)
        // addColLigne(documentRef, {
        //     Désignation: {
        //         label: "agrume 30cl",
        //         couleur: "black"
        //     },
        //     RefMP: {
        //         label: "AGR-003",
        //     },
        //     Quantité: {
        //         label: "25",
        //         survole: "yeah"
        //     }
        // })

    }, [])



    const [trie, trieLigne] = useState({ header: "Désignation", croissant: true })

    const [modifVal, setModifVal] = useState({ ligneId: null, col: "", val: "" })

    const [modalToShow, setModalToShow] = useState()
    const [modalState, setModalState] = useState(false)
    const [valSupp, setValSupp] = useState({ index: null, bool: false })

    const toogleModal = (val = "notSet") => {
        val !== "notSet" ? setModalState(val) : setModalState(!modalState)
    }

    function modifierLigne(ligneId, col, val) {
        toogleModal(false)
        updateLigne(documentRef, ligneId, col, val)
        onModif?.(ligneId, col, val)
    }


    const modifier = (ligneId, col) => {
        modification && (
            lignes?.map((ligne) => {
                if (ligne.id === ligneId) {
                    for (let key in ligne.data) {
                        if (key === col) {
                            setModifVal({ ligneId: ligneId, col: col, val: ligne.data[key].label })
                        }
                    }
                }
            }),
            toogleModal(true)
        )
    }

    const setSupp = (ligneId) => {
        setValSupp({ index: ligneId, bool: false })
        setModalToShow(<Confirmation toggleModal={toogleModal} setBool={setValSupp} />)
        toogleModal(true)
    }

    function supprimer(ligneId) {
        deleteColLigne(documentRef, ligneId)
        onSupp?.(ligneId)
    }

    useEffect(() => {
        valSupp.bool && supprimer(valSupp.index)
    }, [valSupp.bool])

    useEffect(() => {
        setModalToShow(<Modification toogleModal={toogleModal} modifierLigne={modifierLigne} modifVal={modifVal} setModifVal={setModifVal} />)
    }, [modifVal])

    const funcTrieLigne = (trie) => {
        trie.croissant ?
            (lignes?.sort((a, b) => a.data[trie.header].label > b.data[trie.header].label)) : (
                lignes?.sort((a, b) => b.data[trie.header].label > a.data[trie.header].label))
    }
    funcTrieLigne(trie)

    return (
        <div>
            {modalState && modalToShow}
            {loadingTable ? "loading table" : (
                <div>
                    {dataTable?.name}<br />
                    {dataTable?.description}
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <Header headers={dataTable?.headers} trie={trie} trieLigne={trieLigne} />
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {
                                loadingLignes ? "loading lignes" : (
                                    lignes?.map((ligne) => (
                                        <Ligne key={ligne.id} headers={dataTable?.headers} ligne={ligne} funcModifLigne={modifier} funcSupp={setSupp} boolModif={modification} />
                                    )))
                            }
                        </tbody>
                    </table>
                </div>)}
        </div>
    )
}

export default TableLux
