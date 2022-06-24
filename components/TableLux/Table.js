import Header from "./Header";
import Ligne from "./Ligne";

function Table({ headers, lignes, funcModifLigne, trie, trieLigne, funcSupp, boolModif }) {
    return (

        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <Header headers={headers} trie={trie} trieLigne={trieLigne} />
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {
                    lignes?.map((ligne, index) => (
                        <Ligne key={index} nLigne={index} headers={headers} ligne={ligne} funcModifLigne={funcModifLigne} funcSupp={funcSupp} boolModif={boolModif} />
                    ))
                }
            </tbody>
        </table>
    )
}

export default Table