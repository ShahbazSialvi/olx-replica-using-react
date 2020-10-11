import React from 'react'

function PracMap() {

    let things = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    return (
        <div>
            {
                things.map((obj, ind) => {
                    return <li key={ind}>{obj}</li>
                })
            }
        </div>
    )
}

export default PracMap
