import { useState, useCallback } from 'react'

const useFetch = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const request = useCallback(async (url, options) => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch(url, options)

      if (!response.ok) {
        throw new Error(`Erro: ${response.status}`)
      }

      const json = await response.json()
      setData(json)
      return json
    } catch (err) {
      setError(err.message)
      setData(null)
      return null
    } finally {
      setLoading(false)
    }
  }, [])

  return { data, error, loading, request }
}

export default useFetch
