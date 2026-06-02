import React, {useState, useEffect, useContext} from 'react'
import { Link } from 'react-router-dom'

import useForm from '../../Hooks/useForm'
import { userContext } from '../../Hooks/userContext'

import Input from '../Forms/Input'
import Button from '../Forms/Button'
import Error from '../Helpers/Error'

import styles from './LoginForm.module.css'

const FormLogin = () => {
    
   const username = useForm()
   const password = useForm()

   const { userLogin, error, loading  } = useContext(userContext)

   const handleSubmit = async (event) => {
        event.preventDefault()

        if(username.validate() && password.validate()) {
            userLogin(username.value, password.value)
        }
    }

    return (
    <section className='animeLeft'>
        <h1 className='title'>Login</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
            <Input id='username' type='text' label='Usuário' onChange={username.onChange} onBlur={username.onBlur} value={username.value} error={username.error} />
            <Input id='password' type='text' label='Senha' type='password' onChange={password.onChange} onBlur={password.onBlur} value={password.value} error={password.error} />
            <Button text='Entrar' type='submit' disabled={loading}/>
            {error && <Error message={error} />}
        </form>
        <Link className={styles.lost} to='lost-password'>Perdeu a senha?</Link>
        <div className={styles.cadastro}>
            <h2 className={styles.subtitle}>Cadastre-se</h2>
            <p>Ainda não possui conta? Cadastre-se no site.</p>
            <Link to='create'>
                <Button text={"Cadastro"} />
            </Link>    
        </div>
    </section>
  )
}

export default FormLogin
