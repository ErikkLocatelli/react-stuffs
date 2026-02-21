import React from 'react'
import Form from './Form'

const Modal = ({modal, setModal}) => {
  if (modal) 
  return (
    <div>
      <button onClick={() => setModal(false)}>Fechar</button>
      <Form />
    </div>
  )
  return null;
}

export default Modal
