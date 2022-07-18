import { useState } from "react"
import Formule from "../components/Formule"

function Table() {

    const data = {
        name: "fruitFraits",
        type: "tableau",
        description: "tableau d'achat de matiere premieres brutes pour la transformation",

        /* indication sur les valeur du headers
        id: identifiant de chaque header
        label : la lettre qui va s'afficher sur le header ^obligatoire
        type: le type de cette header ^obligatoire
        unite: l'unité utiliser (ex: kgs, cm, ar, ...) ^optionelle
        survole: le text afficher quand on survole cette header (comme une petite commentaire) ^optionelle
        formule: formule pour chaque lignes en desous de cette header (ex: (idDeQuantité * idDePU))
        */

        headers: [
            {
                id: "g1hi",
                label: "Quantité",
                type: "number",
                unite: "kgs",
                survole: "la quantité de mp en kgs"
            },
            {
                id: "pqr",
                label: "rdt",
                type: "pourcentage",
                unite: "%"
            }
        ],
    }

    const [tableData, setTableData] = useState({
        name: "",
        type: "",
        description: "",
    })

    const [headers, setHeaders] = useState([
        {
            handleIt: 0,
            id: '0a',
            label: '',
            type: '',
            unite: '',
            survole: '',
            formule: { real: '', toShow: '' }
        }
    ])

    function confirm() {
        const data1 = { ...tableData, ...{ headers: headers } }
    }

    function addHeader() {
        setHeaders(header => [...header, ...[{
            handleIt: header.length,
            id: (header.length + 'a'),
            label: '',
            type: '',
            unite: '',
            survole: '',
            formule: { real: '', toShow: '' }
        }]])
    }

    function changeValHeader(idTable, idObj, value) {
        const headerAModif = headers.filter(header => header.id === idTable)[0]
        const headerReste = headers.filter(header => header.id !== idTable)

        headerAModif[idObj] = value

        setHeaders([...headerReste, ...[headerAModif]])
    }

    const [modalModif, setModalModif] = useState(false)
    const [id, setId] = useState('')

    function addFormule(id) {
        setId(id)
        setModalModif(true)
    }

    headers.sort((a, b) => a.handleIt < b.handleIt)

    return (
        <>
            <Formule headers={headers} modalModif={modalModif} setModalModif={setModalModif} changeValHeader={changeValHeader} idH={id} />
            <div className="w-full h-screen bg-gray-400">

                <h1 className="text-center text-5xl text-gray-500">Table creation</h1>
                <div className="flex flex-col items-center">

                    <div className="w-[500px] p-10">
                        <div className="grid grid-cols-2 my-3">
                            <label className="text-gray-900">Nom : </label>
                            <input type="text" onChange={e => setTableData(td => ({ ...td, ...{ name: e.target.value } }))} value={tableData.name} className="rounded-xl px-3 focus:outline-none" />
                        </div>
                        <div className="grid grid-cols-2  my-3">
                            <label className="text-gray-900">Type : </label>
                            <input type="text" onChange={e => setTableData(td => ({ ...td, ...{ type: e.target.value } }))} value={tableData.type} placeholder="combobox tableau ou liste" className="rounded-xl px-3 focus:outline-none" />
                        </div>
                        <div className="grid grid-cols-2  my-3">
                            <label className="text-gray-900">Description : </label>
                            <input type="text" onChange={e => setTableData(td => ({ ...td, ...{ description: e.target.value } }))} value={tableData.description} className="rounded-xl px-3 focus:outline-none" />
                        </div>
                    </div>

                    {tableData.type === 'tableau' && (
                        <div className="w-full mb-5 ml-3">
                            <div className="flex justify-center items-center">
                                <h3 className="text-xl text-center mr-4">Headers number : </h3>
                                <button onClick={addHeader}>+</button>
                            </div>
                            {headers.map((header, index) => (
                                <div key={index} className="grid grid-cols-6" >
                                    <p className="m-3 text-center">{header.id} </p>
                                    <input type="text" onChange={(e) => changeValHeader(header.id, 'label', e.target.value)} value={header.label} placeholder="label" className="m-3" />
                                    <input type="text" onChange={(e) => changeValHeader(header.id, 'type', e.target.value)} value={header.type} placeholder="type" className="m-3" />
                                    <input type="text" onChange={(e) => changeValHeader(header.id, 'unite', e.target.value)} value={header.unite} placeholder="unite" className="m-3" />
                                    <input type="text" onChange={(e) => changeValHeader(header.id, 'survole', e.target.value)} value={header.survole} placeholder="survole" className="m-3" />
                                    <button onClick={() => addFormule(header.id)}>{header.formule.toShow ? header.formule.toShow : 'Ajouter formule'}</button>
                                </div>
                            ))}
                        </div>
                    )}
                    <div onClick={confirm} className="cursor-pointer bg-blue-600 rounded-full p-2">Confirmer</div>
                </div>

            </div>
        </>
    )
}

export default Table
