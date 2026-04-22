import React from 'react'
import styles from './styles/Product.module.css'

const Product = ({src, text}) => {
  return (
    <div>
      <img className={styles.img} src={src} />
      <span className={styles.text}>{text}</span>
    </div>
  )
}

export default Product
