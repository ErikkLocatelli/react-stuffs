import {useState, useEffect} from 'react'

import styles from './FeedModal.module.css'

import useFetch from '../../Hooks/UseFetch'
import { PHOTO_GET } from '../../Helpers/api'

import Error from '../Helpers/Error'
import Loading from '../Helpers/Loading'
import PhotoContent from '../Photo/PhotoContent'

const FeedModal = ({photo, setModalPhoto}) => {

  const [data, setData] = useState(null)
  const {request, error, loading} = useFetch()

  useEffect(() => {
    
    const photoFetch = async () => {
      const { url, options } = PHOTO_GET(photo.id)
      const { response, json } = await request(url, options) 
      
      if (response.ok) {
        setData(json)
      }
    }
    
    photoFetch()
  }, [photo, request])

  const handleOutsideClick = (e) => {
    if(e.target === e.currentTarget) {
      setModalPhoto(null)
    }
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error message={error}/>}
      {loading && <Loading />}
      {data && 
        <PhotoContent info={data} />
      }
    </div>
  )
}

export default FeedModal
