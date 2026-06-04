import React from 'react'

import Error from '../Helpers/Error'

import { PHOTO_DELETE } from '../../Helpers/api'
import { getToken } from '../../Helpers/getToken'
import useFetch from '../../Hooks/UseFetch'

const PhotoDelete = ({id}) => {

    const token = getToken()
    const { error, loading, request } = useFetch()

    const handleDelete = async () => {
        const confirm = window.alert("Você tem certeza que quer deletar a foto?")
        if(confirm) {
            const { url, options } = PHOTO_DELETE(id, token)
            const { response, json } = await request(url, options)
            if (response.ok) {
                window.location.reload()
            }
        }
    }


  return (
    <>
      <button onClick={handleDelete} disabled={loading}>Deletar foto</button>
      <Error message={error} />
    </>
  )
}

export default PhotoDelete
