import React from 'react'
import './App.css'
import Home from './pages/home'
import Header from './components/header'
// import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Home />
      </div>
    </div>
  )
}

export default App
