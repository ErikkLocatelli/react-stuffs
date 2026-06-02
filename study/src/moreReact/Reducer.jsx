import React, {useReducer} from 'react'
import Button from '../components/Button'

const reducer = (state, action) => {
    switch (action.type) {
        case "aumentar":
            return state + 1 
        case "diminuir": 
            return state =- 1
    }
}

const Reducer = () => {
  
  const [state, dispatch] = useReducer(reducer, 0)
  
    return (
    <div>
      <Button texto={"Diminuir"} onClick={() => dispatch("aumentar")} />
      - 
      <Button texto={"Aumentar"} onClick={() => dispatch("diminuir") }/>
      -
      {state}
    </div>
  )
}

export default Reducer
