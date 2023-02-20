import React, { Fragment } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './routes/Home'
import Proyectos from './routes/Proyectos'
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <div style={{display:'grid', gridTemplateRows:'170px minmax(calc(100vh - 340px), 1fr) 170px'}}>
      <Navbar/>
     
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/proyectos" element={<Proyectos/>}/>
          
        </Routes>
      
      <Footer/>
    </div>
  )
}
