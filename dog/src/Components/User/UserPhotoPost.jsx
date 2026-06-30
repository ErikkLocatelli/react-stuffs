import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useForm from '../../Hooks/useForm'
import UseFetch from '../../Hooks/UseFetch'

import { PHOTO_POST } from '../../Helpers/api'
import { getToken } from '../../Helpers/getToken'
import useHead from '../../Hooks/useHead'

import styles from "./UserPhotoPost.module.css"

import Input from '../Forms/Input'
import Button from '../Forms/Button'
import Error from '../Helpers/Error'

const UserPhotoPost = () => {

  const name = useForm()
  const age = useForm('number')
  const weigth = useForm('number')
  const [img, setImg] = useState({})

  const token = getToken()
  const { error, loading, request } = UseFetch() 
  const navigate = useNavigate()

  useHead({title: "Postar Fotos"})

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('img', img.raw)
    formData.append('nome', name.value)
    formData.append('idade', age.value)
    formData.append('peso', weigth.value)

    const { url, options } = PHOTO_POST(token, formData)
    const { response } = await request(url, options)
    if (response.ok) {
      navigate('/account')
    }
  }

  const handleImgChange = ({target}) => {

    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0]
    })
  }

  return (
   <section className={`${styles.photoPost} animeLeft`}>
      <form onSubmit={handleSubmit}>
        <Input label={"Nome"} type="text" value={name.value} error={name.error} onChange={name.onChange} onBlur={name.onBlur}/>
        <Input label={"Peso"} type="text"  value={weigth.value} error={weigth.error} onChange={weigth.onChange} onBlur={weigth.onBlur}/>
        <Input label={"Idade"} type="text" value={age.value} error={age.error} onChange={age.onChange} onBlur={age.onBlur}/>
        <input type="file" name='img' id='img' onChange={handleImgChange} className={styles.file} />
        <Button disabled={loading} text={"Enviar"} type="submit"/>
        {error && <Error message={error}/>}
      </form>
      <div className={styles.preview}
              style={{backgroundImage: `url('${img.preview}')`}}>
        {/* {img.preview && 
         <div className={styles.preview}
              style={{backgroundImage: `url('${img.preview}')`}}>

        </div> } */}
      </div>
   </section>
  )
}

export default UserPhotoPost
