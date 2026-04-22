import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../Button'

const Login = () => {

    const navigate = useNavigate()

    function handleClick() {
        console.log("fez login")
        navigate('/sobre')
    }


  return (
    <div>
      <h1>Login</h1>
      <Button texto={"Fazer Login"} onClick={handleClick}/>
    </div>
  )
}

export default Login
