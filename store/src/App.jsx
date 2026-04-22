import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'

import Header from './pages/Header'
import Products from './pages/Products'
import Contatc from './pages/Contatc'
import Product from './pages/Product'

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
       <Header />
       <Routes>
        <Route path='/' element={<Products />} />
        <Route path='produto/:id' element={ <Product /> } />
        <Route path='/contato' element={<Contatc />} />
       </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
