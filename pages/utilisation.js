import { useEffect, useState } from 'react'
import { recup, ajouter, supprimer } from './ilaina'


function utilisation() {

    const [todos, setTodos] = useState('')

    function getTodos() {
        //reef azony le izy d atsofony anaty todos
        recup().then(res => setTodos(res))
    }

    function ireoFonctionApesaina() {
        //recup les données
        getTodos()

        //le ajouter tandremo tsara sode manao boucle infinie, na asio useEffect fotsn ra mbola ts hita izay hireglena azy
        //reef manao ajout izany dia mila objet izay tian'ndry no atao ao (eto izao 'label' sy 'status')
        ajouter({ label: 'todos vaovao', status: 'mbola tsy vita' })

        //reef hanao suppression dia le id ao am todos no atao otranio ambany io
        //otran zao ny pozin'ilay id {id:'lOmiDrlahyacuRIkOzaD'}
        supprimer('9GrdiVutoOFOvxnTamvq')
    }


    //ato andramana ny iray amin'ireo fonction mba hialana am boucle infinie
    useEffect(() => {
        getTodos()
    }, [])

    console.log(todos)

    return (
        <div>
            Ao am console mijery an'ireo données
        </div>
    )
}

export default utilisation
