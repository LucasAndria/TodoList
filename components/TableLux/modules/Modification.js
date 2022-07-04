function Modification({ toogleModal, modifierLigne, modifVal, setModifVal }) {
    var inputVal = modifVal.val
    return (
        <div className="backdrop-blur-sm bg-white/50 overflow-y-auto overflow-x-hidden fixed justify-center items-center h-modal md:h-full md:inset-0">
            <div className="flex justify-center">
                <div className="relative bg-blue-200 rounded-lg shadow mt-50">
                    <div className="flex justify-end p-2">
                        <button onClick={() => toogleModal(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                    <form className="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8">
                        <div>
                            <input onChange={e => (inputVal = e.target.value)} placeholder={modifVal.val} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"></input>
                        </div>
                        <button onClick={(e) => (e.preventDefault(), modifierLigne(modifVal.ligneId, modifVal.col, inputVal))} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Appliquers</button>
                        <button onClick={(e) => (e.preventDefault(), () => setModifVal({ ligneId: null, col: "", val: "" }), toogleModal(false))} type="submit" className="ml-4 text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Annuler</button>
                    </form>
                </div>
            </div >
        </div >
    )
}

export default Modification
