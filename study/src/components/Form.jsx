import React from 'react'
import InputText from './InputText'

const Form = () => {
  return (
    <div style={{margin: "1rem 0"}}>
      <InputText id='email 'label="Email" type="text"/>
      <InputText id='password' label="Password" type='password'/>
    </div>
  )
}

export default Form
