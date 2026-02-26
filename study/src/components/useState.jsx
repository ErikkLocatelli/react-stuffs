import React, {useState, useMemo} from 'react'

const UseStateComp = () => {
    const [contar, setContar] = useState(0);
    
    const valor = useMemo(() => {
        const localStorageItem = window.localStorage.getItem('produto');
        console.log('teste');
        return localStorageItem;
    }, []);
    console.log(valor);

  return <button onClick={() => setContar(contar + 1)}>{contar}</button>;
}

export default UseStateComp
