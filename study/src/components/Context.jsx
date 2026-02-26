import React, { createContext, useState} from 'react';

export const GlobalContext = createContext();

export const GlobalStorage = ({children}) => {

    const [produtos, setProduto] = useState(null)

    async function getData() {
        const data = await fetch('https://ranekapi.origamid.dev/json/api/produto/')
        const json = await data.json()
        return setProduto(json)
    }

    const cleanData = () => {
        return setProduto(null)
    }

    return(
        <GlobalContext.Provider value={{produtos, getData, cleanData}}>
            {children}
        </GlobalContext.Provider>
    )

}

