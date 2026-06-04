import {BrowserRouter, Routes, Route } from 'react-router-dom'
import ProtectedRouter from './Components/Helpers/ProtectedRouter'

import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Login from './Components/Login/Login'
import User from './Components/User/User'
import Photo from './Components/Photo/Photo'
import Error404 from './Components/Helpers/Error404'

import { UserStorage } from './Hooks/userContext'

import './App.css'
import UserProfile from './Components/User/UserProfile'

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
          <Route path='photo/:id' element={<Photo />} />
          <Route path='profile/:user' element={<UserProfile />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
        <Footer />
      </UserStorage>
    </BrowserRouter>
    </>
  )
}

export default App
