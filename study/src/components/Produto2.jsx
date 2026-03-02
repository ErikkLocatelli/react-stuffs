import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from './Context'
import Button from './Button'
import CardProdutos from './CardProdutos'
import Titulo from './Titulo'

const Produto2 = () => {

    const global = useContext(GlobalContext)
    const [index, setIndex] = useState(0)

    useEffect(() => {
        global.getData()
    }, [])

    console.log(global.produtos)

  return (
    <div>
        <Button texto={"Buscar Dados"} onClick={global.getData} style={{marginRight: "10px"}} />
        <Button texto={"Limpar Dados"} onClick={global.cleanData} />
        <Titulo texto={"Gerenciador de Produtos"} />
        <Button texto={"Produto Anterior"} style={{marginRight: "10px"}} onClick={() => setIndex(prev => (prev-1 + global.produtos.length) % global.produtos.length)}/>
        <Button texto={"Próximo Produto"} onClick={() => setIndex(prev => (prev+1) % global.produtos.length) } />
       {global.produtos && <CardProdutos produtos={global.produtos} index={index} />}
    </div>
  )
}

export default Produto2
