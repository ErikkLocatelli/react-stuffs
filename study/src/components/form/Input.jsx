import React, {useState} from 'react'

const Input = () => {

    const [nome, setNome] = useState('')
    const [lista, setLista] = useState([])

    const handleSubmit = (event) => {
        event.preventDefault()
        if (nome.length > 1) setLista([...lista, nome])
    }

  return (
   <div>
       <form onSubmit={handleSubmit}>
            <label htmlFor="name">Escreva o nome</label>
            <input type="text" id='name' value={nome} onChange={(event) => setNome(event.target.value)} />
            {nome&&<p>Seja bem vindo: {nome}</p>}
            <button type='submit'>Enviar</button>
       </form>
       {lista.length > 0 && <ul><li key={nome}>{nome}</li></ul>}
   </div>
  )
}

export default Input
