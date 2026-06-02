import { useState, useEffect } from 'react'

const useMedia = (media) => {

  const [match, setMatch] = useState(() => {
    return window.matchMedia(media).matches
  })

  useEffect(() => {
    const mediaQuery = window.matchMedia(media)

    const handleChange = (e) => {
      setMatch(e.matches)
    }

    setMatch(mediaQuery.matches)

    mediaQuery.addEventListener('change', handleChange)

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [media])

  return match 
}

export default useMedia