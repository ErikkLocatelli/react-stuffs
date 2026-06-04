import React, { useContext } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { userContext } from '../../Hooks/userContext'

import UserHeader from './UserHeader'
import Feed from '../Feed/Feed'
import UserPhotoPost from './UserPhotoPost'
import UserStats from './UserStats'

const User = () => {

  const { data } = useContext(userContext)
  const username = data.username

  return (
   <section className='container'>
    <UserHeader />
    <Routes>
        <Route path='/' element={<Feed user={username} />}/>
        <Route path='post' element={<UserPhotoPost />}/>
        <Route path='stats' element={<UserStats />}/>
    </Routes>
   </section>
  )
}

export default User
