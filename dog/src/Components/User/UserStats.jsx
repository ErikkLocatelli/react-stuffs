import { useEffect, useState } from 'react'

import useFetch from '../../Hooks/UseFetch'
import useHead from '../../Hooks/useHead'
import { STATS_GET } from '../../Helpers/api'
import { getToken } from '../../Helpers/getToken'

import Loading from '../Helpers/Loading'
import Error from '../Helpers/Error'
import UserStatsGraphs from './UserStatsGraphs'

const UserStats = () => {

  const {error, loading, request} = useFetch()
  const [stats, setStats] = useState(null)
  useHead({title: "Estatísticas"})

  useEffect(() => {

    const handleStats = async () => {
      const token = getToken()
      const { url, options } = STATS_GET(token)
      const { json, response } = await request(url, options)
      if(response.ok) {
        setStats(json)
      }
    }

    handleStats()
  }, [request])

  if(loading) return <Loading />
  if(error) return <Error message={error}/>

  if(stats)
    return (
      <div>
        <UserStatsGraphs data={stats} />
      </div>
    )
}

export default UserStats
