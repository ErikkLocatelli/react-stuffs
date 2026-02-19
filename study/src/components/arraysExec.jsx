import React from "react";
import getClients from "../services/getClient";

const ArrayExec = () => {

    async function getClientBuys() {
        const produtos = await getClients()
        const dados = produtos.filter(({preco}) => Number(preco.replace('R$ ', "") > 1800))
    return dados
    }

    return (
      <div>
        {dados.map(({id, nome, preco, cores}) => (
            <div key={id}>
                <h1>{nome}</h1>
                <p>Preço: {preco}</p>
                <ul>
                    {cores.map((cor) => (
                        <li key={cor} style={{backgroundColor: cor, color: 'white'}}>{cor}</li>
                    ))}
                </ul>
            </div>
        ))}
      </div>
    )
}

export default ArrayExec