import { useEffect, useState } from "react"
import { db } from '../../firebase'
import { collection, getDocs, addDoc, doc, setDoc, deleteDoc, serverTimestamp } from 'firebase/firestore'
import Ajout from "./Ajout"
import Liste from "./Liste"

function TodoList() {
    const [todoList, setTodoListe] = useState([])

    async function refresh() {
        const querySnapshot = await getDocs(collection(db, "todos"));
        setTodoListe([])
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data().label);
            setTodoListe(prev => [...prev, ...[{ id: doc.id, label: doc.data().label, status: doc.data().status }]])
        });
    }

    useEffect(() => {
        refresh()
    }, [])

    async function funcAjout(value) {
        setTodoListe(prev => [...prev, ...[{ id: "not specified", label: value, status: "pas terminé" }]])

        const docRef = await addDoc(collection(db, "todos"), {
            label: value,
            status: "pas terminé",
            timestamp: serverTimestamp()
        });

        refresh()

    }

    // async function funcModif(index, value) {
    //     const tmp = todoList
    //     tmp.splice(index, 1, value)

    //     console.log(todoList)
    // }

    // useEffect(() => {
    //     setTodoListe(tmp)
    // }, [tmp])



    async function funcSupp(index) {

        const newArr = todoList.filter((todo) => todo.id !== index)
        setTodoListe(newArr)

        await deleteDoc(doc(db, "todos", index));
    }

    return (
        <div className="div">
            <Ajout funcAjout={funcAjout} />
            {/* <Liste todoList={todoList} funcModif={funcModif} funcSupp={funcSupp} /> */}
            <Liste todoList={todoList} funcSupp={funcSupp} />
        </div>
    )
}

export default TodoList
