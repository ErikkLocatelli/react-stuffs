import React from 'react'
import { Link } from 'react-router-dom'

import styles from '../components/styles/pages/Header.module.css'

import Button from '../components/Button'

const Header = () => {
  return (
    <nav>
      <Link to='/'><Button text={"Produtos"} /></Link>
      <Link to='/contato'><Button text={"Contato"} /></Link>
    </nav>
  )
}

export default Header
