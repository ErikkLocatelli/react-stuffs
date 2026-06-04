import React, {createContext, useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import useFetch from './UseFetch'
import { TOKEN_POST, USER_GET, TOKEN_VALIDATE_POST, USER_POST } from '../Helpers/api'

export const userContext = createContext()

export const UserStorage = ({children}) => {
  const [data, setData] = useState(null)
  const [login, setLogin] = useState(null)
  const navigate = useNavigate()
  const { error, loading, request } = useFetch()

  useEffect(() => {

    const autoLogin = async () => {
      const token = window.localStorage.getItem('token')
        if (token) {
          const { url, options } = TOKEN_VALIDATE_POST(token)
          const { response, json } = await request(url, options)
          
          if (response.ok) {
            await getUser(token)
          } else {
            userLogout()
          }
        }
      }

    autoLogin()
  }, [])


  const userLogin = async (username, password) => {
    const { url, options } = TOKEN_POST({username, password})
    const { json } = await request(url, options)
    
    if(json?.token) {

      window.localStorage.setItem('token', json.token)

      await getUser(json.token)

      navigate('account')
    }
  }


  const getUser = async (token) => {
    const { url, options} = USER_GET(token) 
    const { json } = await request(url, options)
    setData(json)
    setLogin(true)
  }

  const userLogout = async () => {
    setData(null)
    setLogin(false)
    window.localStorage.removeItem('token')
    navigate('/login')
  }

  const createLogin = async (username, email, password) => {
    const { url, options} = USER_POST({username, email, password})
    const { response } = await request(url, options)

    if(response) {
      userLogin(username, password)
    }

  }

  return (
    <userContext.Provider value={{ userLogin, userLogout, createLogin, data, login, loading, error }}>
        {children}
    </userContext.Provider>
  )
}

