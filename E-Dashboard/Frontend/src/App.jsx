import { useState } from 'react'
import './App.css'
import Nav from './assets/Nav'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <h1>E-Dashboard</h1>
      </div>
    </BrowserRouter>
  )
}

export default App
