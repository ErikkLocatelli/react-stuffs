import React from 'react'
import { NavLink } from 'react-router-dom'
import Head from './Head'

const Home = () => {
  return (
    <div>
      <Head title={"titulo"} />
      <h1>Essa é a home</h1>
      <NavLink to='produto/notebook' >Notebook | </NavLink>
      <NavLink to='produto/smartphone' >Smartphone</NavLink>
    </div>
  )
}

export default Home
