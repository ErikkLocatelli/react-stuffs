import React from "react";
import Clients from "./clients";

const Arrays = () => {
    const produtos = ['celular', 'teclado', 'monitor']
    const empresas = [<Clients />]
    
    return (
        <div>
            <div>---------------------------------</div>
            <div>{empresas}</div>
            <div><ul>
                {produtos.map(produto => <li key={produto}>{produto}</li>)}    
            </ul></div>
            <div>---------------------------------</div>
        </div>
    )
}

export default Arrays