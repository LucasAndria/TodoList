import React from 'react'

function test() {

    const arr = [{ ok: "haha" }, "2"]
    const obj = { one: 1, two: 2 }

    arr.map(
        arrs => {
            console.log(typeof arrs)
        }
    )

    return (
        <div>

        </div>
    )
}

export default test
