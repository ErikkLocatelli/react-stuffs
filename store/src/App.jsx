import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'

import Header from './pages/Header'
import Products from './pages/Products'
import Contatc from './pages/Contatc'
import Product from './pages/Product'
import { UserStorage } from './Hooks/userContext'

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path='/' element={<Products />} />
            <Route path='produto/:id' element={ <Product /> } />
            <Route path='/contato' element={<Contatc />} />
          </Routes>
        </UserStorage>
      </BrowserRouter>
    </div>
  )
}

export default App
