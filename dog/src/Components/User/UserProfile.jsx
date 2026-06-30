import React from 'react'
import { useParams } from 'react-router-dom'

import useHead from '../../Hooks/useHead'
import Feed from '../Feed/Feed'

const UserProfile = () => {

    const { user } = useParams()
    useHead({title: user.toLocaleUpperCase()})

    console.log(user)

  return (
    <section className='container mainContainer'>
        <h1 className='title'>{user}</h1>
        <Feed user={user} />
    </section>
  )
}

export default UserProfile
