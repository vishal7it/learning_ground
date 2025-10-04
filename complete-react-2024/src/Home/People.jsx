import React, { useContext } from 'react'
import MoneyContext from '../context/MoneyContext'

const People = () => {
    // console.log(useContext(MoneyContext))
    const data = useContext(MoneyContext)

    return (
        <>
            <h1>This is People component</h1>
            <h1>Yeh money is here {data.money}</h1>
            <h3>Dollor = {data.dollor}</h3>
            <h1>counter = {data.counter}</h1>
            <button onClick={() => data.setCounter(data.counter + 1)}>Increase</button>
        </>
    )
}

export default People