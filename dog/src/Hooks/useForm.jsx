import React, {useState} from 'react'

import types from '../Helpers/typeErrors'

const useForm = (type) => {

    const [value, setValue] = useState('')
    const [error, setError] = useState(null)

    const validate = (value) => {
        if(type === false) return true; 
        if(value.length === 0) {
            setError('Preencha um valor')
            return false
        } else if(types[type] && !types[type].regex.test(value)) {
            setError(types[type].message)
            return false
        } else {
            setError(null)
            return true
        }
    }

    const onChange = ({target}) => {
        if(error) validate(target.value)
        setValue(target.value)
    }

  return {value, setValue, onChange, validate: () => validate(value), onBlur: () => validate(value), error}
}

export default useForm
