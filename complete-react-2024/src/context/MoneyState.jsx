import React, { useState } from 'react'
import MoneyContext from './MoneyContext'

const MoneyState = (props) => {
    const money = 189000
    const dollor = 10;
    const name = "suman"
    const [counter, setCounter] = useState(0)
    return (
        <MoneyContext.Provider value={{
            money,
            counter, setCounter, dollor, name
        }}> {props.children}</MoneyContext.Provider >
    )
}

export default MoneyState