import React, {useState} from 'react'
import Button from './Button'
import Titulo from './Titulo'

// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado


const FetchProdutos = () => {
    const [dados, setDados] = useState(null)
    const [loading, setLoading] = useState(false)

    async function getData(url) {
        setLoading(true)
        const data = await fetch(url)
        const json = await data.json()

        console.log(json)
        setDados(json)
        setLoading(false)
    }


    return (
    <div>
      <Button onClick={() => getData("https://ranekapi.origamid.dev/json/api/produto/tablet")} texto={"Buscar Tablet"}/>
      <Button onClick={() => getData("https://ranekapi.origamid.dev/json/api/produto/smartphone")} texto={"Buscar Smartphone"}/>
      <Button onClick={() => getData("https://ranekapi.origamid.dev/json/api/produto/notebook")} texto={"Buscar Notebook"}/>
      {loading && !dados && <p>Loading...</p>}
      {!dados && !loading && <p>Busque por um produto</p>}
      {dados &&  <section>
            <p>{dados.nome} - {"R$ " + dados.preco} - {dados.vendido ? "Fora de estoque" : "Em estoque"}</p>
            {dados.fotos.map(({titulo, src}) => (
                <div key={titulo}>
                    <img src={src}/>
                    <p>{titulo}</p>
                </div>
            ))}
            <p>{dados.descricao}</p>
        </section>}
    </div>
  )
}

export default FetchProdutos
