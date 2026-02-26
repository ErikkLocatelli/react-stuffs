import React from 'react'

const CardProdutos = ({produtos, index}) => {
  
    const produto = produtos[index]
  
    return (
    <section key={produto.id}>
        <p>{produto.nome} - {produto.preco}</p>
        <p>{produto.descricao}</p>
        {produto.fotos.map(foto => (
            <div key={foto.src}>
                <p>{foto.titulo}</p>
                <img src={foto.src} />
            </div>
        ))}
    </section>
  )
}

export default CardProdutos
