import TableLux from '../components/TableLux'
import { useState } from "react"

function UseTable() {
    //données ajouter static
    const headers = (["H1", "H2", "H3"])

    const [lignes, setLignes] = useState([
        { H1: "ligne1col1", H2: "ligne1col2", H3: "ligne1col3" },
        // { H3: "", H1: "ligne2col1" },
        { H1: "ligne2col1", H2: "ligne2col2", H3: "ligne2col3" },
        { H1: "ligne3col1", H2: "ligne3col2", H3: "ligne3col3" },
        { H1: "ligne4col1", H2: "ligne4col2", H3: "ligne4col3" }
    ])

    //données avec firebase



    const persSupp = (obj) => {
        console.log(obj)
    }

    const persAjout = () => {
        console.log("Ajouter")
    }

    const persModif = (ligne, col) => {
        console.log(ligne, col)
    }

    return (
        <div>
            <TableLux headers={headers} lignes={lignes} setLignes={setLignes} modification={true} />
        </div>
    )
}

export default UseTable
