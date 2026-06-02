import React, {useContext} from 'react'
import { Link } from 'react-router-dom'

import Image from '../Helpers/Image'

import { userContext } from '../../Hooks/userContext'

import styles from './PhotoContent.module.css'
import PhotoComments from './PhotoComments'
import PhotoDelete from './PhotoDelete'

const PhotoContent = ({info}) => {

  const { photo, comments } = info
  const { data } = useContext(userContext)

  return (
    <div className={styles.photo}>
      <div className={styles.img}>
        <Image src={photo.src} alt={photo.title} />
      </div>

      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            {data.nome === photo.author ? <PhotoDelete id={photo.id} /> : <Link to={`/profile/${photo.author}`}> {`@${photo.author}`}</Link>}
            <span className={styles.view}>{photo.acessos}</span>
          </p>
          <h1 className='title'>
            <Link to={`/photo/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={styles.attributes}>
            <li>{photo.peso} kg</li>
            <li>{photo.idade} anos</li>
          </ul>
        </div>
      </div>
       
      <PhotoComments id={photo.id} comments={comments} />
    </div>
  )
}

export default PhotoContent
