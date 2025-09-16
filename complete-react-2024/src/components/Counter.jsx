import React from 'react'
import { useState } from 'react';

const Counter = () => {

    const [counter, setCounter] = useState(0);

    const increaseByOne = () => {
        // counter++;
        setCounter(counter + 1)
        console.log("counter = ", counter);
    };
    const decreaseByOne = () => {
        // counter--;
        counter > 0 ? setCounter(counter - 1) : 1
        console.log("counter = ", counter);
    };
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={increaseByOne}>Increase</button>
            <button onClick={decreaseByOne}>Decrease</button>
        </div>
    )
}

export default Counter
