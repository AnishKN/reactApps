import { useState } from 'react'
import './App.css'

function App() {
  let [counter,setCounter] = useState(10)

  let increase = () =>{
    if(counter < 20 ){
      counter = counter + 1
      setCounter(counter)
    }
  }
  let decrease = () =>{
    if(counter > 0 ){
      counter = counter - 1
      setCounter(counter)
    }
  }
  let reset = () =>{
    setCounter(0)
  }

  return (
    <>
     <h1>Count : {counter}</h1>
     <button
     onClick={increase}
     >Increase</button>
     <button
      onClick={decrease}
      >Decrease</button>
      <button
      onClick={reset}
      >Reset</button>
    </>
  )
}

export default App
