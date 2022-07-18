import { useEffect, useState } from "react"

function Formule({ headers, modalModif, setModalModif, changeValHeader, idH }) {

    const [formule, setFormule] = useState({ real: '', toShow: '' })

    const [parenthese, setParenthese] = useState(true)

    useEffect(() => {
        modalModif && supp()
    }, [modalModif])

    const supp = () => {
        setFormule({
            real: '', toShow: ''
        })
        setParenthese(true)
    }

    const confirmer = () => {
        changeValHeader(idH, 'formule', formule)
    }

    const getElement = (e) => {
        let val = ''
        if (e.target.textContent === '( )') { val = parenthese ? '(' : ')', setParenthese(!parenthese) }
        else if (e.target.textContent === 'OK') {
            (
                setModalModif(false),
                !parenthese && setFormule(f => ({ real: f.real + ')', toShow: f.toShow + ')' })),
                confirmer()
            )
        }
        else { val = e.target.textContent }

        setFormule(f => ({ real: f.real + val, toShow: f.toShow + val }))
    }

    const getChamp = (vr, vs) => {
        setFormule(f => ({ real: f.real + vr, toShow: f.toShow + vs }))
    }

    return (
        <div className={modalModif ? (
            "absolute left-[0%] scale-100 right-0 w-full h-screen bg-black/95 ease-in-out duration-1000 text-white"
        ) : (
            "absolute left-[-100%] scale-0 w-full h-screen bg-black/95 ease-in-out duration-1000"
        )}>
            <button onClick={() => setModalModif(false)} className="text-3xl text-black absolute right-5">x</button>

            <h1 className=" text-3xl text-center bg-gray-500 py-3">Ajout formule </h1>
            <div className="grid grid-cols-2 gap-8">
                <div className="col-span-2 flex justify-center mt-5">
                    <input readOnly type="text" value={formule.toShow} className="text-black focus:outline-none rounded-xl px-3 w-[250px]" />
                    <div onClick={supp} className="text-center bg-gray-400 m-2 px-3 rounded cursor-pointer hover:scale-105 text-black h-8">Del</div>
                </div>
                <div className="grid md:grid-cols-2 xl:grid-cols-3">
                    <div className="text-lg md:col-span-2 xl:col-span-3 text-center">Formule avec les champs du tableau</div>
                    {headers.map((header, index) => (
                        header.label && <div key={index} onClick={() => getChamp(`(obj.${header.id}.label)`, `(${header.label})`)} className="text-center bg-gray-400 m-2 rounded cursor-pointer hover:scale-105 text-black h-8">{header.label}</div>
                    ))}

                </div>
                <div className="grid grid-cols-4 h-[250px]">
                    <div className="text-lg col-span-4 text-center">Formule de base</div>
                    <div onClick={getElement} className="text-center bg-gray-400 m-2 rounded cursor-pointer hover:scale-105 text-black ">( )</div>
                    <div onClick={getElement} className="text-center bg-gray-400 m-2 rounded cursor-pointer hover:scale-105 text-black ">/</div>
                    <div onClick={getElement} className="text-center bg-gray-400 m-2 rounded cursor-pointer hover:scale-105 text-black ">*</div>
                    <div onClick={getElement} className="text-center bg-gray-400 m-2 rounded cursor-pointer hover:scale-105 text-black ">-</div>
                    <div onClick={getElement} className="text-center bg-gray-400 m-2 rounded cursor-pointer hover:scale-105 text-black ">7</div>
                    <div onClick={getElement} className="text-center bg-gray-400 m-2 rounded cursor-pointer hover:scale-105 text-black ">8</div>
                    <div onClick={getElement} className="text-center bg-gray-400 m-2 rounded cursor-pointer hover:scale-105 text-black ">9</div>
                    <div onClick={getElement} className="text-center bg-gray-400 m-2 rounded cursor-pointer hover:scale-105 text-black row-span-2">+</div>
                    <div onClick={getElement} className="text-center bg-gray-400 m-2 rounded cursor-pointer hover:scale-105 text-black ">4</div>
                    <div onClick={getElement} className="text-center bg-gray-400 m-2 rounded cursor-pointer hover:scale-105 text-black ">5</div>
                    <div onClick={getElement} className="text-center bg-gray-400 m-2 rounded cursor-pointer hover:scale-105 text-black ">6</div>
                    <div onClick={getElement} className="text-center bg-gray-400 m-2 rounded cursor-pointer hover:scale-105 text-black ">1</div>
                    <div onClick={getElement} className="text-center bg-gray-400 m-2 rounded cursor-pointer hover:scale-105 text-black ">2</div>
                    <div onClick={getElement} className="text-center bg-gray-400 m-2 rounded cursor-pointer hover:scale-105 text-black ">3</div>
                    <div onClick={getElement} className="text-center bg-gray-400 m-2 rounded cursor-pointer hover:scale-105 text-black row-span-2">OK</div>
                    <div onClick={getElement} className="text-center bg-gray-400 m-2 rounded cursor-pointer hover:scale-105 text-black col-span-2">0</div>
                    <div onClick={getElement} className="text-center bg-gray-400 m-2 rounded cursor-pointer hover:scale-105 text-black ">.</div>
                </div>
            </div>

        </div>
    )
}

export default Formule
