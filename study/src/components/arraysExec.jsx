import React from "react";
import getClients from "../services/getClient";

const ArrayExec = () => {


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