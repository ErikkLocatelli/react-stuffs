import React from 'react'

const Button = ({texto,...props}) => {
  return (
    <button {...props}>{texto}</button>
  )
}

export default Button
