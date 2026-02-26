import React, {useState, useEffect} from 'react'
import Button from './Button'
import Titulo from './Titulo'
import CardProduto from './cardProduto'

const Preference = () => {

  const [dados, setDado] = useState(null)  

  useEffect(() => {
    const produtoLocal = localStorage.getItem("produto")
    console.log(produtoLocal)
  }, [])

  useEffect(() => {
    if(dados !== null) {
        localStorage.setItem("produto", dados)
    }
  }, [dados])

  async function getData(params) {
    const data = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${params}`)
    const json = await data.json()
    
    setDado(json)
    localStorage.setItem("produto", JSON.stringify(json))
  }

  const handleClick = (e) => {
    const value = e.target.value; 
    getData(value)
  }
 
  return (
    <div>
      <Titulo texto={"Preferência: " + (dados !== null ? dados.nome : "")} />
      <Button style={{marginRight:"1rem"}} value={"notebook"} texto={"Notebook"} onClick={handleClick}/>
      <Button  texto={"Smartphone"} value={'smartphone'} onClick={handleClick}/>
      {dados && <CardProduto title={dados.nome} p={"R$ " + dados.preco}/>}
    </div>
  )
}

export default Preference
