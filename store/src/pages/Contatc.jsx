import React from 'react'

import styles from '../components/styles/pages/Contact.module.css'

const Contatc = () => {
  return (
    <div className={styles.contact}>
      <img src="../../public/assets/contato.jpg" alt="" />
      <div>
        <h2>Contato</h2>
        <ul>
          <li>Erik Locatelli</li>
          <li>erikk@gmail.com</li>
          <li>47 99235-7244</li>
        </ul>
      </div>
    </div>
  )
}

export default Contatc
