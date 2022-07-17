import Ligne from "./Ligne"
import { db } from '../../firebase'
import { collection, getDocs } from 'firebase/firestore'
import { useEffect } from "react";

function Liste({ todoList, /*funcModif,*/ funcSupp }) {

    console.log(todoList)

    return (
        <div className="mx-24 bg-[#CAF6BF] rounded-xl p-5">
            <ul>
                {todoList.map((todo, index) => (
                    // <Ligne key={index} num={index} todo={todo} funcModif={funcModif} funcSupp={funcSupp} />
                    <Ligne key={todo.id} id={todo.id} index={index} todo={todo.label} funcSupp={funcSupp} />
                ))}
            </ul>
        </div>
    )
}

export default Liste
