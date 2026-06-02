import {useContext, useState, useEffect} from 'react'
import { NavLink, useAsyncError, useLocation } from 'react-router-dom'

import { userContext } from '../../Hooks/userContext'
import useMedia from '../../Hooks/useMedia'

import Feed from '../../Assets/feed.svg?react'
import Stats from '../../Assets/estatisticas.svg?react'
import AddPhoto from '../../Assets/adicionar.svg?react'
import Sair from '../../Assets/sair.svg?react'
import styles from './UserHeaderNav.module.css'

const UserHeaderNav = () => {

    const { userLogout } = useContext(userContext)
    const mobile = useMedia('(max-width: 40rem)')
    const [mobileMenu, setMobileMenu] = useState(false)
    
    const { pathname } = useLocation()

    useEffect(() => {
        setMobileMenu(false)
    }, [pathname])

  return (
    <>
        {mobile && <button 
            aria-label='menu' 
            onClick={() => setMobileMenu(!mobileMenu)}
            className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`}    
        ></button>}
        <nav className={`${mobile ? styles.navMobile : styles.nav } ${mobileMenu && styles.navMobileActive}`}>
            <NavLink to='/account' end>
                <Feed />
                {mobile && "Minhas Fotos"}
            </NavLink>
            <NavLink to='/account/stats'>
                <Stats />
                {mobile && "Estatísticas"}
            </NavLink>
            <NavLink to='/account/post'>
                <AddPhoto />
                {mobile && "Adicionar Foto"}
            </NavLink>
            
            <button onClick={userLogout}>
                <Sair />
                {mobile && "Sair"}
            </button>
        </nav>
    </>
  )
}

export default UserHeaderNav
