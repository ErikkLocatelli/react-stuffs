import React from 'react'

import Dogs from '../../Assets/dogs-footer.svg?react'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <div className='container mainContainer'>
        <h1 className='title'>Opsss...</h1>
        <p>Essa página não pode ser farejada. Deseja retornar a <Link to='/'>home?</Link></p>
    </div>
  )
}

export default Error404
