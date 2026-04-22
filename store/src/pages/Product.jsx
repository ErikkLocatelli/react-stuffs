import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

import styles from '../components/styles/pages/Product.module.css'
import Button from '../components/Button'

const Product = () => {
  
    const {data, loading, error, request} = useFetch()
    const params = useParams()
    const [index, setIndex] = useState([0])

     useEffect(() => {
      request(`https://ranekapi.origamid.dev/json/api/produto/${params.id}`)
    }, [request])

    if(loading) return <p>Carregando...</p>
    if(error) return <p>Erro</p>

    return (
      <div className={styles.product}>
        <div>
          <img src={data?.fotos?.[index]?.src} />
          {data?.fotos?.length > 1 && 
            <div className={styles.navButton}>
              <Button text={"←"} onClick={() => setIndex([0])} />
              <Button text={"→"} onClick={() => setIndex([1])} />
            </div>
          }
        </div>
        <div className={styles.desc}>
          <h2>{data.nome}</h2>
          <span className={styles.preco}>{"R$ " + data.preco}</span>
          <p>{data.descricao}</p>
        </div>
      </div>
  )
}

export default Product
