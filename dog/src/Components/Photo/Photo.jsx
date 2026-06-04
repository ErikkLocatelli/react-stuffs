import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { PHOTO_GET } from '../../Helpers/api'
import useFetch from '../../Hooks/UseFetch'
import Error from '../Helpers/Error'
import Loading from '../Helpers/Loading'
import PhotoContent from './PhotoContent'

const Photo = () => {

    const [data, setData] = useState(null)
    const { id } = useParams()
    const { request, error, loading } = useFetch()
    
    useEffect(()=> {
        const getPhoto = async () => {
            const { url, options } = PHOTO_GET(id)
            const { response, json } = await request(url, options)
            if (response.ok) {
                setData(json)
            }
        }

        getPhoto()
    }, [id, request])


    if (error) return <Error message={error}/>
    if (loading) return <Loading />

    if (data) { return (
        <section className='container mainContainer'>
            <PhotoContent info={data} single={true} />
        </section>
    ) }
}

export default Photo
