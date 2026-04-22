import React, {act, useState} from 'react'
import { useParams, Link, Outlet } from 'react-router-dom'

const Produto = () => {

  const produtos = [
    {
      "nome": 'notebook',
      "preço": 1234,
      "ano": 2017
    },
    {
      "nome": 'smartphone',
      "preço": 1657,
      "ano": 2020
    }
  ]
  const params = useParams()
  const produto = params.id
  const actualProdut = produtos.find((item) => item.nome === produto)
  
  return (
    <div>
        <h1>Produto: {actualProdut.nome}</h1>
        <p>Lancamento: {actualProdut.ano}</p>
        <p>Preco: {actualProdut.preço}</p>
        <nav>
          <Link to='produto-customizado'>Customizar | </Link>
          <Link to='produto-avaliação'>Avaliacao</Link>
        </nav>
        <Outlet />
    </div>
  )
}

export default Produto
