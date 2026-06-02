import {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom'

import UserHeaderNav from './UserHeaderNav'

import styles from './UserHeader.module.css'

const UserHeader = () => {

  const [title, setTitle] = useState('')
  const location = useLocation()
  const defaultLocation = "/account"

  useEffect(() => {
 
    const {pathname} = location

    switch(pathname) {
      case '/account/post':
        setTitle("Postar Foto")
        break
      case "/account/stats": 
        setTitle("Estatísticas")
        break
      default:
        setTitle("Minha Conta")
    }

  }, [location])

  return (
   <header className={styles.header}>
        <h1 className='title'>{title}</h1>
        <UserHeaderNav />
   </header>
  )
}

export default UserHeader
