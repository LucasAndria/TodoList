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
            },
            {
                id: "stu",
                label: "Capacite",
                type: "number",
                unite: "KG",
                //ajouter (obj/100) pour les types pourcentage dans les formules
                formule: "(obj.g1hi.label)*(obj.pqr.label/100)"
            },
            {
                id: "a34",
                label: "Nbre Btl",
                type: "number",
                unite: "2022",
                formule: "(obj.stu.label)/(obj.iz1.label)"
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
            formule: '',
        }
    ])

    function addHeader() {
        setHeaders(header => [...header, ...[{
            handleIt: header.length,
            id: (header.length + 'a'),
            label: '',
            type: '',
            unite: '',
            survole: '',
            formule: '',
        }]])
    }

    function changeValHeader(idTable, idObj, value) {
        const headerAModif = headers.filter(header => header.id === idTable)[0]
        const headerReste = headers.filter(header => header.id !== idTable)

        headerAModif[idObj] = value

        setHeaders([...headerReste, ...[headerAModif]])
    }

    const [modalModif, setModalModif] = useState(false)

    function addFormule() {
        setModalModif(true)
    }

    headers.sort((a, b) => a.handleIt < b.handleIt)

    return (
        <>
            <Formule modalModif={modalModif} setModalModif={setModalModif} />
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
                    {/* indication sur les valeur du headers
                    id: identifiant de chaque header
                    label : la lettre qui va s'afficher sur le header ^obligatoire
                    type: le type de cette header ^obligatoire
                    unite: l'unité utiliser (ex: kgs, cm, ar, ...) ^optionelle
                    survole: le text afficher quand on survole cette header (comme une petite commentaire) ^optionelle
                    formule: formule pour chaque lignes en desous de cette header (ex: (idDeQuantité * idDePU)) */}

                    {tableData.type === 'tableau' && (
                        <div className="w-full mb-5 ml-3">
                            <div className="flex justify-center">
                                <h3 className="text-xl text-center mr-4">Headers number : </h3>
                                <button onClick={addHeader}>+</button>
                            </div>
                            {headers.map((header, index) => (
                                <div key={index} className="flex justify-center" >
                                    <p className="m-3">{header.id} </p>
                                    <input type="text" onChange={(e) => changeValHeader(header.id, 'label', e.target.value)} value={header.label} placeholder="label" className="m-3" />
                                    <input type="text" onChange={(e) => changeValHeader(header.id, 'type', e.target.value)} value={header.type} placeholder="type" className="m-3" />
                                    <input type="text" onChange={(e) => changeValHeader(header.id, 'unite', e.target.value)} value={header.unite} placeholder="unite" className="m-3" />
                                    <input type="text" onChange={(e) => changeValHeader(header.id, 'survole', e.target.value)} value={header.survole} placeholder="survole" className="m-3" />
                                    <button onClick={addFormule}>+ formule</button>
                                    {/* <input type="text" onChange={(e) => changeValHeader(header.id, 'formule', e.target.value)} value={header.formule} placeholder="formule" className="m-3" /> */}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

            </div>
        </>
    )
}

export default Table
