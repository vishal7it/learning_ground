import React from 'react'
import People from './People'

const Panchayat = ({ money }) => {
    return (
        <>
            <h1>Panchayat</h1>
            <People money={money} />
        </>
    )
}

export default Panchayat