import React from 'react'
import District from './District'

const StateGov = ({ money }) => {
    return (
        <>
            <h1>StateGov</h1>
            <District money={money} />
        </>
    )
}

export default StateGov