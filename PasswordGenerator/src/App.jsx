import React, { useCallback, useEffect, useState } from 'react'

function App() {
  const [length,setLenght] = useState(6)
  const [number,setNumber] = useState(false)
  const [charactor,setCharactor] = useState(false)
  const [password,setPassword] = useState("")
  const passwordGenerator = useCallback( ()=>{
    let pass = ''
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number) str+="1234567890"
    if(charactor) str+="!@#$%^&*-_+=[]{}~`"
    for(let i=1;i<=length;i++){
      pass+= str.charAt(Math.floor(Math.random() * str.length + 1))
    }
    setPassword(pass)
  },[length,number,charactor])
  useEffect(()=>{
    passwordGenerator()
  },[length,number,charactor])
  return (
    <>
      <div className="min-w-screen min-h-screen bg-gray-800 flex items-center justify-center px-5 py-5">
          <div className="w-full mx-auto rounded-lg bg-white shadow p-5 text-gray-800" style={{maxWidth : 500 + 'px'}}>
              <div className="relative mb-2">
              <h1 className="mb-4 text-3xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Password Generator</span></h1>
                  <input type="text" id="password" className="w-full pl-3 pr-10 py-2 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Password"
                  value={password}
                  readOnly={true}
                  />
                  <button className="block w-7 h-7 text-center text-xl leading-0 absolute top-2 right-2 text-gray-400 focus:outline-none hover:text-indigo-500 transition-colors"><i className="mdi"></i></button>
              </div>
              <hr className="my-5 border border-gray-200" />
              <div className="mb-2">
                  <label className="block text-xs font-semibold text-gray-500 mb-2">PASSWORD LENGTH</label>
                  <input 
                  className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" 
                  placeholder="Length" 
                  type="number" 
                  min="1" 
                  max="30" 
                  step="1" 
                  value={length}
                  onChange={ (e) => {
                    setLenght(e.target.value)
                  }}
                  />
                  <input 
                  className="w-full" 
                  type="range" 
                  min="1" 
                  max="30" 
                  step="1" 
                  value={length}
                  onChange={ (e) => {
                    setLenght(e.target.value)
                  }}
                  />
              </div>
              <div className="flex -mx-2 mb-2">
                  <div className="w-1/2 px-2">
                      <label htmlFor="charsLower">
                          <input type="checkbox" className="align-middle" id="charsLower"   
                          onChange={ (e) => {
                            setNumber( (prev) => !prev)
                          }}
                          />
                          <span className="text-xs font-semibold text-gray-500">Numbers</span>
                      </label>
                  </div>
                  <div className="w-1/2 px-2">
                      <label htmlFor="charsUpper">
                          <input type="checkbox" className="align-middle" id="charsUpper"   
                          onChange={ (e) => {
                            setCharactor( (prev) => !prev)
                          }}
                          />
                          <span className="text-xs font-semibold text-gray-500">Characters</span>
                      </label>
                  </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default App
