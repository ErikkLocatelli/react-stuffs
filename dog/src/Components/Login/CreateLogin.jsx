import React, { useContext } from 'react'

import useForm from '../../Hooks/useForm'
import { userContext } from '../../Hooks/userContext'

import Input from '../Forms/Input'
import Button from '../Forms/Button'
import Error from '../Helpers/Error'

const CreateLogin = () => {
  
  const username = useForm()
  const email = useForm('email')
  const password = useForm()

  const { createLogin, error, loading } = useContext(userContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (username.validate && password.validate && email.validate) {
      createLogin(username.value, email.value, password.value)
    } 
  }
  
  return (
    <section className='animeLeft'>
      <h1 className='title'>Cadastre-se</h1>
      <form onSubmit={handleSubmit}>

        <Input label={'Usuário'} type='text' value={username.value} onChange={username.onChange} onBlur={username.onBlur} error={username.error}/>
        <Input label={'Email'} type='email' value={email.value} onChange={email.onChange} onBlur={email.onBlur} error={email.error} />
        <Input label={'Senha'} type='password' value={password.value} onChange={password.onChange} onBlur={password.onBlur} error={password.error}/>
        
        <Button text={"Cadastrar"} type='submit' disabled={loading}/>

        {error && <Error message={error} />}

      </form>
    </section>
  )
}

export default CreateLogin
