import React from 'react'
import InputText from './InputText'
import Button from './Button'

const Form = () => {
  return (
    <div style={{margin: "1rem 0"}}>
      <InputText id='email 'label="Email" type="text"/>
      <InputText id='password' label="Password" type='password'/>
      <Button texto={"Enviar"} type='submit' />
    </div>
  )
}

export default Form
