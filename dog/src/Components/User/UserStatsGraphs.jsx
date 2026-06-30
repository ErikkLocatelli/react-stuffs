import React, { useState } from 'react'

import styles from './UserStatsGraphs.module.css'
import {VictoryPie, VictoryChart, VictoryBar } from 'victory'

const UserStatsGraphs = ({data}) => {
    const [graph, setGraph] = useState([])
    const [total, setTotal] = useState(0)

    const calculateTotalAcess = () => {
        return data.map(item => item.acessos)
                .reduce((acc, num) => (acc + num))
    }

    const setGraphData = () => {
        return data.map((item) => ({y: item.title, x: item.acessos}))
    }

    useState(()=>{
        if(data.length > 0) {
            const acess = calculateTotalAcess()
            const graphData = setGraphData()

            console.log(graphData)
            setTotal(total + acess)
            setGraph(graphData)
        }

    }, [data])

  return (
    <section className={`animeLeft ${styles.graph}`}>
        <div className={`${styles.graphItem} ${styles.total}`}>
            <p>Acessos: {total}</p>
        </div>
        {graph && 
        <div className={styles.graphItem}>
            <VictoryPie data={graph}/>
        </div>  }
         {graph && 
        <div className={styles.graphItem}>
            <VictoryBar data={graph}></VictoryBar>
        </div>}
    </section>
  )
}

export default UserStatsGraphs
