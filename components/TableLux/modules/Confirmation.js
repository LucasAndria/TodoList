function Confirmation({ toggleModal, setBool, text = "Confirmer ?" }) {
    return (
        <div className="backdrop-blur-sm bg-white/50 overflow-y-hidden overflow-x-hidden fixed justify-center items-center h-modal md:h-full md:inset-0">
            <div className="flex justify-center">
                <div className="relative bg-blue-100 rounded-lg shadow dark:bg-gray-700 ">
                    <div className="flex justify-end p-2">
                        <button onClick={() => toggleModal(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                    <form className="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8">
                        <h4 className="text-xl font-medium flex justify-center">{text}</h4>
                        <div className="flex justify-between">
                            <button onClick={(e) => (e.preventDefault(), setBool((prev) => ({ ...prev, ...{ bool: true } })), toggleModal(false))} className="mr-5 text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-4 py-2 text-center">Confirmer</button>
                            <button onClick={(e) => (e.preventDefault(), setBool((prev) => ({ ...prev, ...{ bool: false } })), toggleModal(false))} className="text-white bg-blue-500 hover:bg-blue-400 font-medium rounded-lg text-sm px-4 py-2 text-center">Annuler</button>
                        </div>
                    </form>
                </div >
            </div>
        </div>
    )
}

export default Confirmation
