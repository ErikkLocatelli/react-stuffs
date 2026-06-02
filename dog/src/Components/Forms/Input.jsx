import React from 'react'

import styles from './Input.module.css'

const Input = ({ id, label, error, ...props }) => {
  return (
    <div className={styles.wrapper}>
        <label htmlFor={id} className={styles.label}>{label}</label>
        <input className={styles.input} id={id} {...props} />
        {error && <p className={styles.error}>{error}</p>}
    </div>
  )
}

export default Input
