import React, {useContext} from 'react'
import { userContext } from '../../Hooks/userContext'

import { Navigate } from 'react-router-dom'

const ProtectedRouter = ({component}) => {

    const { login } = useContext(userContext)

  return login ? component : <Navigate to='/login' /> 

}

export default ProtectedRouter
