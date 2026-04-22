import React from 'react'

import styles from './styles/Button.module.css'

const Button = ({text, ...props}) => {
  return (
    <button {...props}>{text}</button>
  )
}

export default Button
