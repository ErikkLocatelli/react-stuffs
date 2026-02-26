import React, {useState, useEffect, useRef} from 'react'
import Form from './Form';
import InputText from './InputText';
import Button from './Button';

const UseRef = () => {
    const [comentarios, setComentarios] = useState(['teste', 'teste2'])
    const [input, setInput] = useState('')
    const inputElement = useRef()

   function handleClick() {
    if(input.length > 1) setComentarios([...comentarios, input])
    inputElement.current.focus()
   }

  return <div>
    <ul>{comentarios.map(
        (comentario, index) => (
            <li key={index}>{comentario}</li>
        )
    )}</ul>
   <InputText label={"Escreva Algo"} id={"name"} ref={inputElement} value={input} onChange={({target}) => setInput(target.value)}/>
   <Button texto={"Enviar"} onClick={handleClick}/>
  </div>;
}

export default UseRef
