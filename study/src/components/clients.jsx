import React from "react";
import { useState } from "react";

const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const Clients = () => {
    const [dados, setDados] = useState(mario)
    const total = dados.compras.map(item => +(item.preco.replace('R$ ', '')))
                                                      .reduce((acc, atual) => acc + atual, 0)


    const changeClient = () => {
        setDados(dados == mario ?  luana :  mario)
    }

 return <div>
    <p>Nome: {dados.cliente}</p>
    <p>Idade: {dados.idade}</p>
    <p>Situação: {dados.ativa ? 'Ativa' : 'Inativa'}</p>
    <p>Total Gasto: {total}</p>
    <p>{total > 10000 ? 'Você está gastando demais' : ""}</p>
    <button onClick={changeClient}>Alterar Cliente</button>
  </div>;
};

export default Clients
