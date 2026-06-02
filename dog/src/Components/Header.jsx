import React, {useContext} from 'react'
import { Link } from 'react-router-dom'

import { userContext } from '../Hooks/userContext'

import styles from './Header.module.css'
import Dogs from '../Assets/dogs.svg?react'

const Header = () => {

  const { data, login } = useContext(userContext)

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
          <Link to='/' aria-label='Dogs - Home' className={styles.logo}>
            <Dogs />
          </Link>
            {login ?  
              <Link to='/account' className={styles.login}>{data.nome}</Link> : 
              <Link to='/login' className={styles.login}>Login</Link>
            }    
      </nav>
    </header>
  )
}

export default Header
