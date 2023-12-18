import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AnimatedCursor from "react-animated-cursor"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AnimatedCursor 
    innerSize={8}
    outerSize={55}
    innerScale={1}
    outerScale={2}
    outerAlpha={0}
    hasBlendMode={true}
    innerStyle={{
      backgroundColor: '#888'
    }}
    outerStyle={{
      border: '2px solid #666'
    }}
    />
    <App />
  </React.StrictMode>,
)
