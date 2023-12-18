import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='*' element={"404 error"} />
        </Route>
      </Routes>
    </BrowserRouter>   
  )
}

export default App
