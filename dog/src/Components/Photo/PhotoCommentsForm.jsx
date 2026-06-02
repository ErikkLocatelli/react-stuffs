import React, { useState } from 'react'

import Enviar from '../../Assets/enviar.svg?react'
import Error from '../Helpers/Error'

import useFetch from '../../Hooks/UseFetch'
import { COMMENT_POST } from '../../Helpers/api'
import { getToken } from '../../Helpers/getToken'

import styles from './PhotoCommentsForm.module.css'

const PhotoCommentsForm = ({id, setComments}) => {
    const [ comment, setComment ] = useState('')
    const { error, request } = useFetch()
    const token = getToken()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const { url, options } = COMMENT_POST(id, {comment}, token)
        const { json , response} = await request(url, options)
        if(response.ok) {
           setComment('')
           setComments((commentsNew) => [...commentsNew, json])
        }
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <textarea className={styles.textarea} value={comment} onChange={({target}) => setComment(target.value)} placeholder='Comentário'></textarea>
            <button type='submit' className={styles.button}> <Enviar /></button>
            <Error message={error} /> 
        </form>
    )
}

export default PhotoCommentsForm
