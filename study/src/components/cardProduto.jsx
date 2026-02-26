import React from 'react'
import Titulo from './Titulo'

const CardProduto = ({title, p}) => {
  return (
    <div>
      <Titulo texto={title} />
      <p>{p}</p>
    </div>
  )
}

export default CardProduto
