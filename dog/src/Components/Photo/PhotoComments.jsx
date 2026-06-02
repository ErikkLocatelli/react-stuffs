import React, {useContext, useEffect, useRef, useState} from 'react'

import { userContext } from '../../Hooks/userContext'
import PhotoCommentsForm from './PhotoCommentsForm'

import styles from './PhotoComments.module.css'

const PhotoComments = ({id, comments}) => {
  const [commentsNew, setComments ] = useState(() => comments )
  const commentsSection = useRef(null)
  const { login } = useContext(userContext)

  useEffect(()=> {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight
  
  }, [commentsNew])

  return (
    <>
      <ul ref={commentsSection} className={styles.comments}>
        {commentsNew.map(comment => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && <PhotoCommentsForm setComments={setComments} id={id} />}
    </>
  )
}

export default PhotoComments
