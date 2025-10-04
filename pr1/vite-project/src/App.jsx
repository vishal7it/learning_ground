import { useState } from 'react'


function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>{counter}</h1>
      <button style={{ backgroundColor: "green", color: "black", gap: "10px", textAlign: "center" }} onMouseOver={() => setCounter(counter + 1)}>Increment</button>
      <button style={{ backgroundColor: "green", color: "black", gap: "10px", textAlign: "center" }} onMouseOver={() => setCounter(counter - 1)}>Decrement</button>
      <button style={{ backgroundColor: "green", color: "black", gap: "10px", textAlign: "center" }} onClick={() => setCounter(0)}>Reset</button>
    </>
  )
}

export default App
