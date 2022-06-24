import { useState, useEffect } from "react"
import Table from "./Table"
import Modification from './modules/Modification'
import Confirmation from "./modules/Confirmation"

function TableLux({ headers, lignes, setLignes, modification = false, persModif, persAjout, persSupp }) {

    const [trie, trieLigne] = useState({ header: "id", croissant: true })

    const [modifVal, setModifVal] = useState({ numLigne: "", col: "", val: "" })

    const [modalToShow, setModalToShow] = useState()
    const [modalState, setModalState] = useState(false)
    const [valSupp, setValSupp] = useState({ index: "", bool: false })

    const toogleModal = (val = "undef") => {
        val !== "undef" ? setModalState(val) : setModalState(!modalState)
    }

    setLignes ? "" : modification = false

    const modifierLigne = (numLigne, col, val) => {

        const ligneModif = lignes.filter((ligne, i) => i === numLigne)
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
        setLignes([...[ligneModif2], ...ligneRestes])
        toogleModal(false)
    }


    const setSupp = (numLigne) => {
        persSupp ? persSupp(numLigne) : (
            setValSupp({ index: numLigne, bool: false }),
            setModalToShow(<Confirmation toggleModal={toogleModal} setBool={setValSupp} />),
            toogleModal(true))
    }

    const supprimer = (numLigne) => {
        const tblTemp = lignes
        setLignes(tblTemp.filter(ligne => ligne !== lignes[numLigne]))
    }

    useEffect(() => {
        if (valSupp.bool) {
            supprimer(valSupp.index)
        }
    }, [valSupp.bool])

    const modifier = (numLigne, col) => {
        persModif ? persModif(numLigne, col) : (
            modification && (
                lignes.map((ligne, key) => {
                    if (key === numLigne) {
                        for (let j in ligne) {
                            if (j === col) {
                                setModifVal({ numLigne: numLigne, col: col, val: ligne[j] })
                            }
                        }
                    }
                }),
                toogleModal(true)
            )
        )
    }

    useEffect(() => {
        setModalToShow(<Modification toogleModal={toogleModal} modifierLigne={modifierLigne} modifVal={modifVal} />)
    }, [modifVal])

    const funcTrieLigne = (trie) => {
        trie.croissant ?
            (lignes?.sort((a, b) => a[trie.header] > b[trie.header])) : (
                lignes?.sort((a, b) => b[trie.header] > a[trie.header]))
    }

    funcTrieLigne(trie)

    return (
        <div>
            {modalState && modalToShow}
            <Table headers={headers} trie={trie} trieLigne={trieLigne} lignes={lignes} funcModifLigne={modifier} funcSupp={setSupp} boolModif={modification} />
        </div>
    )
}

export default TableLux
