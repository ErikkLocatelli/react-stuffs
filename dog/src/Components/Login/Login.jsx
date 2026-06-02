import React from 'react'
import { Route, Routes } from 'react-router-dom'

import FormLogin from './FormLogin'
import CreateLogin from './CreateLogin'
import LostPassword from './LostPassword'
import ResetPassword from './ResetPassword'

import styles from './Login.module.css'

const Login = () => {
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path='' element={<FormLogin />} />
          <Route path='create' element={<CreateLogin />} />
          <Route path='lost-password' element={<LostPassword />} />
          <Route path='reset-password' element={<ResetPassword />} />
        </Routes>
      </div>
    </section>
  )
}

export default Login
