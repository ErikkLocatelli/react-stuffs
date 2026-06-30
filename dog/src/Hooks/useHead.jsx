import { useEffect } from 'react'

const useHead = ({title, description}) => {
  
    useEffect(() => {
        
        const metaDescription = document.querySelector("meta[name='description']"); 
        document.title = title + " - Dogs";

        if(metaDescription) metaDescription.setAttribute('content', description);

    }, [title, description])
  
}

export default useHead
