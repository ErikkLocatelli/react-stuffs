import React, { useState, useCallback} from 'react'

const useFetch = () => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const request = useCallback(async (url, options) => {

        let response
        let json

        try {

            setError(null)
            setLoading(true)

            response = await fetch(url, options)
            json = await response.json()

            if (!response.ok) {
                throw new Error(json?.message)
            }

        } catch (err) {

            setError(err.message)

        } finally {

            setLoading(false)

        }

        return { response, json }

    }, [])

    return { loading, error, request }
}

export default useFetch
