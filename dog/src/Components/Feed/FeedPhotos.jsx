import {useEffect, useState } from 'react'

import FeedPhotosItem from './FeedPhotosItem'
import Error from '../Helpers/Error'
import Loading from '../Helpers/Loading'

import useFetch from '../../Hooks/UseFetch'
import { PHOTOS_GET } from '../../Helpers/api'

import styles from './FeedPhotos.module.css'

const FeedPhotos = ({setModalPhoto}) => {
    
    const [data, setData] = useState(null)
    const { error, loading, request} = useFetch()

    useEffect(() => {

        const fetchPhotos = async () => {
            const {url, options} = PHOTOS_GET({page: 1, total: 6, user: 0})
            const { response, json } = await request(url, options) 
            
            if(response) setData(json)
        }
        fetchPhotos()
    }, [request])

    if(error) return <Error message={error} />
    if(loading) return <Loading />
    if(data) return (
        <ul className={`animeLeft ${styles.feed}`}>
            {data.map(photo => (
                <FeedPhotosItem photo={photo} setModalPhoto={setModalPhoto} key={photo.id}/>
            ))}
        </ul>     
        )
    }

export default FeedPhotos
