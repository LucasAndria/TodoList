import { db } from "../firebase"
import { doc, onSnapshot } from "firebase/firestore";

function test() {


    onSnapshot(doc(db, "buisnessPlanPrevisionnel", "FruitFrais"), (doc) => {
        console.log("Current data: ", doc.data());
    })

    return (
        <div>

        </div>
    )
}

export default test
