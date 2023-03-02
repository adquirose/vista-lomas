import React, { Fragment } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Proyecto from './routes/Proyecto'
import AyD from './routes/AyD'
import Contacto from './routes/Contacto'
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <div style={{display:'grid', gridTemplateRows:'170px minmax(calc(100vh - 340px), 1fr) 170px'}}>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Proyecto/>}/>
        <Route path="/ayd" element={<AyD/>}/>
        <Route path="/contacto" element={<Contacto/>}/> 
      </Routes>
      <Footer/>
    </div>
  )
}
