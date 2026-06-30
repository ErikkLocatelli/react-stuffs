import React from 'react'

import DogsFooter from '../Assets/dogs-footer.svg?react'

import styles from './Footer.module.css'

const Footer = () => {
  return (
   <footer className={styles.footer}>
    <DogsFooter />
    <p>Dogs. Alguns direitos reservados</p>
   </footer>
  )
}

export default Footer
