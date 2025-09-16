import React from 'react'
import { useState, useEffect } from 'react'


const UseEffect = () => {
    const [count, setcount] = useState(10)
    useEffect(() => {
        console.log("UseEffect is running......!")
        document.title = count
    }, [count])

    return (
        <div>
            <h1>Counter = {count}</h1>
            <button onClick={() => setcount(count + 1)}>Increase</button>
            <button onClick={() => setcount(count - 1)}>decrease</button>
        </div>
    )
}

export default UseEffect
