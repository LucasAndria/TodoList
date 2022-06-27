import { useState, useEffect } from "react"
import Modification from './modules/Modification'
import Confirmation from "./modules/Confirmation"
import Header from "./Header"
import Ligne from "./Ligne"


function TableLux({ documentRef, modification = false, persModif, persAjout, persSupp }) {

    const [information, setInformation] = useState()
    const [headers, setHeaders] = useState(null)
    const [lignes, setLignes] = useState([])

    //données avec firebase
    //headers
    useEffect(() => {
        //recup header et info de la table

        async function getTableInfo() {
            const doc = await documentRef.get();
            if (!doc.exists) {
                return 'No such document!';
            } else {
                return doc.data();
            }
        }

        getTableInfo().then(val => (
            setInformation({ name: val.name, description: val.description }),
            setHeaders(val.headers),
            val.type === "tableau" && setHeaders(val.headers)
        ));

        async function getLignes() {
            const snapshot = await documentRef.collection('lignes').get();
            return snapshot
        }
        getLignes().then(snapshot => snapshot.forEach(col => {
            setLignes(prev => [...prev, ...[{ id: col.id, data: col.data() }]])
        }))

    }, [])



    const [trie, trieLigne] = useState({ header: "refmp", croissant: true })

    const [modifVal, setModifVal] = useState({ numLigne: null, col: "", val: "" })

    const [modalToShow, setModalToShow] = useState()
    const [modalState, setModalState] = useState(false)
    const [valSupp, setValSupp] = useState({ index: null, bool: false })

    const toogleModal = (val = "undef") => {
        val !== "undef" ? setModalState(val) : setModalState(!modalState)
    }

    setLignes ? "" : modification = false


    async function modifierLigne(numLigne, col, val) {
        //modification state
        /* const ligneModif = lignes.filter((ligne, i) => i === numLigne)
        const ligneRestes = lignes.filter((ligne, i) => i !== numLigne)
        var ligneModif2 = {}

        lignes.map((ligne, key) => {
            if (key === numLigne) {
                for (let j in ligne) {
                    if (j === col) {
                        ligne[j] = val
                        ligneModif2 = { ...ligneModif[0], ...ligne }
                    }
                }
            }
        })
        setLignes([...[ligneModif2], ...ligneRestes])*/

        //modification db

        var tmp = col + ".label"

        await documentRef.collection('lignes').doc(numLigne).update({ [tmp]: val });

        toogleModal(false)
    }

    const modifier = (numLigne, col) => {
        modification && (
            lignes?.map((ligne) => {
                if (ligne.id === numLigne) {
                    for (let key in ligne.data) {
                        if (key === col) {
                            setModifVal({ numLigne: numLigne, col: col, val: ligne.data[key].label })
                        }
                    }
                }
            }),
            toogleModal(true)
        )
    }

    const setSupp = (numLigne) => {
        persSupp ? persSupp(numLigne) : (
            setValSupp({ index: numLigne, bool: false }),
            setModalToShow(<Confirmation toggleModal={toogleModal} setBool={setValSupp} />),
            toogleModal(true))
    }

    async function supprimer(numLigne) {
        // const tblTemp = lignes
        // setLignes(tblTemp.filter(ligne => ligne !== lignes[numLigne]))
        await documentRef.collection("lignes").doc(numLigne).delete()
    }

    useEffect(() => {
        if (valSupp.bool) {
            supprimer(valSupp.index)
        }
    }, [valSupp.bool])


    useEffect(() => {
        setModalToShow(<Modification toogleModal={toogleModal} modifierLigne={modifierLigne} modifVal={modifVal} />)
    }, [modifVal])

    const funcTrieLigne = (trie) => {
        // trie.croissant ?
        //     (lignes?.sort((a, b) => a.data["Désignation"].label > b.data["Désignation"].label)) : (
        //         lignes?.data?.sort((a, b) => b.data["Désignation"].label > a.data["Désignation"].label))
        console.log("try to order it form db")
    }
    // funcTrieLigne(trie)

    return (
        <div>
            {modalState && modalToShow}
            {/* <Table documentRef={documentRef} information={information} headers={headers} lignes={lignes} trie={trie} trieLigne={trieLigne} funcModifLigne={modifier} funcSupp={setSupp} boolModif={modification} /> */}
            <div>
                {information?.name}<br />
                {information?.description}
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <Header headers={headers} trie={trie} trieLigne={trieLigne} />
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {
                            lignes?.map((ligne) => (
                                <Ligne key={ligne.id} headers={headers} ligne={ligne} funcModifLigne={modifier} funcSupp={setSupp} boolModif={modification} />
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TableLux
