import { useState } from "react"

function App() {
const [color,setColor] = useState("white")
  return (
    <>
      <div
      className="w-full flex flex-wrap justify-center align-middle h-screen transition-all"
      style={{backgroundColor : color}}>
        <button 
        className="px-4 bg-red-400 h-10 rounded-xl mx-1"
        onClick={()=> setColor("red")}>Red</button>
        <button 
        className="px-4 bg-green-400 h-10 rounded-xl mx-1"
        onClick={()=> setColor("green")}>Green</button>
        <button 
        className="px-4 bg-blue-400 h-10 rounded-xl mx-1"
        onClick={()=> setColor("blue")}>Blue</button>
      </div>
    </>
  )
}

export default App
