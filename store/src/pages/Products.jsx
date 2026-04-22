import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

import Product from '../components/Product'
import styles from '../components/styles/pages/Products.module.css'
import Loading from '../components/Loading'

import useFetch from '../hooks/useFetch'

const Products = () => {

  const {data, loading, error, request} = useFetch()

    useEffect(() => {
      request('https://ranekapi.origamid.dev/json/api/produto')
    }, [request])

  if (loading) return <Loading />;
  if (error) return <p>Erro: {error}</p>;

  return (
    <div className={styles.produtos}>
        {data.map(item => (
          <Link key={item.id} to={`produto/${item.id}`}>
            <Product key={item.id} text={item.nome} src={item.fotos[0].src} />
          </Link>
        ))}
    </div>
  )
}

export default Products
