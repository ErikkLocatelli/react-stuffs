import React, {useEffect} from 'react'

const Head = (props) => {
  useEffect(() => {
    document.title = props.title
    console.log(props)
  }, [props])
  
  return <></>
  
}

export default Head
