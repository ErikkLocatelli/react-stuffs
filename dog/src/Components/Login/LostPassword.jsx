import { useState } from 'react'
import { Link } from 'react-router-dom'

import useForm from '../../Hooks/useForm'
import useFetch from '../../Hooks/UseFetch'
import { PASSWORD_RESET } from '../../Helpers/api'

import Input from '../Forms/Input'
import Button from '../Forms/Button'

import styles from './LostPassword.module.css'

const LostPassword = () => {

  const email = useForm('email');
  const [send, setSend] = useState(false);
  const { request, error, loading } = useFetch()
  const location = window.document.location.href; 

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(email.validate()) {
      const { url, options } = PASSWORD_RESET({login: email.value, url: location })
      const { response, json } = await request(url, options)
      setSend(true)
    }
  }

  return (
    <section className='container mainContainer'>
      <h1 className='title'>Perdeu a senha?</h1>
      {!send ? 
      <form onSubmit={handleSubmit}>
        <Input label={"Email"} id={email} placeholder={"dogs@email.com"} value={email.value} onChange={email.onChange} onBlur={email.onBlur} error={email.error} />
        <Button text={"Enviar"} type={'submit'}/>
      </form> : 
      <div className={styles.recover}>
        <h2>Pronto!</h2>
        <p>Um link para recuperar a sua senha foi enviado para <span>{email.value}</span>.</p>
        <p>Confira sua Caixa de Entrada. Caso não encontre o e-mail, procure na pasta de SPAM. Em caso de dúvida, envie um e-mail para <span>suporte@dogs</span></p>
        <Link to={"/login"} className={styles.link}>← Voltar para página inicial</Link>
      </div>
      }
    </section>
  )
}

export default LostPassword
