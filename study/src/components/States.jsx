import React from 'react'
import { useState } from 'react'
import ButtonModal from './ButtonModal';
import Modal from './Modal';


const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['6gb ram', '254gb'] },
    { nome: 'Tablet', propriedades: ['2gb ram', '128gb'] },
];


const States = () => {
    const [ativo, setAtivo] = useState(true)
    const [index, setIndex] = useState(0)
    const [modal, setModal] = useState(false)

    return (
    <div>
        <div>
            <p>{produtos[index].nome}</p>
            <ul>{produtos[index].propriedades.map(prop => (
                <li key={prop}>{prop}</li>
            ))}</ul>
            <div>
                <button style={{margin: "10px"}} onClick={() => setIndex(prev => (prev-1 + produtos.length) % produtos.length)}>Produto Anterior</button>
                <button onClick={() => setIndex(prev => (prev+1) % produtos.length)}>Próximo produto</button>
            </div>
            <div>
                <Modal modal={modal} setModal={setModal} />
                <ButtonModal setModal={setModal} />
            </div>
        </div>

        {/* <button onClick={() => setAtivo(!ativo)}>{ativo ? "Botão Ativo" : "Botão Inativo"}</button> */}
    </div>
  )
}

export default States
