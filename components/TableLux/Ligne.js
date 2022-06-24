function Ligne({ headers, ligne, nLigne, funcModifLigne, funcSupp, boolModif }) {
    let cols = []
    headers.map((header, index) => {
        cols = [...cols, ...[
            <td
                key={index}
                className="bg-red-400 px-6 py-4 whitespace-nowrap"
            >
                {`${header} sur la ligne ${nLigne + 1} n'éxiste pas`}
            </td>
        ]]
    })
    headers.map((header, index) => {
        for (let indexL in ligne) {
            header === indexL && (
                cols[index] = (
                    <td
                        key={index}
                        onDoubleClick={() => funcModifLigne(nLigne, indexL)}
                        className="px-6 py-4 whitespace-nowrap"
                    >
                        {ligne[indexL]}
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
                            onClick={() => funcSupp(nLigne)}
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
