import React, { createContext, useState} from 'react';
import UseFetchCustom from './UseFetchCustom';

export const GlobalContext = createContext();

export const GlobalStorage = ({children}) => {

    const [produtos, setProduto] = useState(null)
    const {request, data} = UseFetchCustom()

    async function getData() {
        await request('https://ranekapi.origamid.dev/json/api/produto/')
        return setProduto({data})
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

