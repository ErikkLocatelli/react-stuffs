import {BrowserRouter, Routes, Route } from 'react-router-dom'
import ProtectedRouter from './Components/Helpers/ProtectedRouter'

import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Login from './Components/Login/Login'
import User from './Components/User/User'

import { UserStorage } from './Hooks/userContext'

import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
      <UserStorage>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login/*' element={<Login />} />
          <Route path='account/*' element={<ProtectedRouter component={<User />} />} />
        </Routes>
        <Footer />
      </UserStorage>
    </BrowserRouter>
    </>
  )
}

export default App
