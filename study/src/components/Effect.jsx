import React, {useEffect, useState} from 'react'
import Button from './Button'

const Effect = () => {

    const [dados, setDados] = useState(null)
    const [contat, setCount] = useState(0)

    async function getData() {
        const data = await fetch("https://ranekapi.origamid.dev/json/api/produto/tablet")
        const json = await data.json()
        
        setDados(json)
    }
 
    useEffect(() => {
       getData()
    }, [])

    useEffect(() => {
        window.document.title = 'Contar ' + contat
    }, [contat]) 
 
  return (
    <div>
      <Button texto={contat} onClick={() => setCount(contat + 1)}/>
    </div>
  )
}

export default Effect
