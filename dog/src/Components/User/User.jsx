import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import UserHeader from './UserHeader'
import Feed from '../Feed/Feed'
import UserPhotoPost from './UserPhotoPost'
import UserStats from './UserStats'

const User = () => {

    const navigate = useNavigate()

  return (
   <section className='container'>
    <UserHeader />
    <Routes>
        <Route path='/' element={<Feed />}/>
        <Route path='post' element={<UserPhotoPost />}/>
        <Route path='stats' element={<UserStats />}/>
    </Routes>
   </section>
  )
}

export default User
