import { useEffect, useState } from "react";
import Comp1 from "../components/Comp1";
import Comp2 from "../components/Comp2";
import { db } from "../firebase";

function test({ pr }) {

    const [data, setData] = useState(pr)

    async function getData() {
        const res = await db.collection('test').doc('abc').get()

        return res
    }

    db.collection('test').doc('abc').onSnapshot(querySnapshot => {
        setData(querySnapshot.data())
    });

    const [data2, setData2] = useState(undefined)
    const [res2, setRes2] = useState(null)
    const [load, setLoad] = useState(true)
    useEffect(() => {
        getData().then(res => (setData2(res.data())))
    }, [])

    // const [state, setstate] = useState(false)

    // setTimeout(() => {
    //     setstate(!state)
    // }, 5000);
    // useEffect(() => {
    //     console.log(data)
    // }, [state])

    return (
        <div>
            <Comp1 data={data} />
            <Comp2 data={data2} />
        </div>
    )
}

export default test

export async function getServerSideProps() {
    const res = await db.collection('test').doc('abc').get()
    const data = res.data()

    return { props: { pr: data } }
}