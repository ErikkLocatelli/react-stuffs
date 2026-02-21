import React from 'react'
import Titulo from './Titulo';

const Produtos = () => {
  
    const produtos = [
        { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
        { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
    ];

  
    return (
    <div>
      <Titulo texto="Produtos"/>
      {produtos.map(({nome, propriedades}) => (
        <section key={nome} style={{border: "2px solid black", margin:"1rem 0", padding: '10px'}}>
            <p>{nome}</p>
            <ul>
                {propriedades.map((prop) => (
                    <li key={prop}>{prop}</li>
                ))}
            </ul>
        </section>
      ))}
    </div>
  )
}

export default Produtos
