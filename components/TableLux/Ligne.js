import { useEffect, useState } from "react"

function Ligne({ headers, ligne, funcModifLigne, funcSupp, boolModif }) {
    let cols = []
    headers?.map((header, index) => {
        cols = [...cols, ...[
            <td
                key={index}
                className="px-6 py-4 whitespace-nowrap"
                onDoubleClick={() => funcModifLigne(ligne?.id, header?.label)}
            >
                {/* {ligne?.id + " " + header?.label} */}
            </td>
        ]]
    })
    headers?.map((header, index) => {
        for (let indexL in ligne?.data) {
            header.label === indexL && (
                cols[index] = (
                    <td
                        key={indexL}
                        onDoubleClick={() => funcModifLigne(ligne.id, indexL)}
                        className="px-6 py-4 whitespace-nowrap"
                    >
                        {ligne.data[indexL].label}
                        {/* {ligne.id + ' = ' + indexL} */}
                    </td>)
            )
        }
    })

    return (
        <tr>
            {cols}
            {
                boolModif && (
                    <td>
                        <button
                            onClick={() => funcSupp(ligne.id)}
                            className="ml-5 mr-3"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="red" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                            </svg>
                        </button>
                    </td>
                )
            }

        </tr>
    )
}

export default Ligne
