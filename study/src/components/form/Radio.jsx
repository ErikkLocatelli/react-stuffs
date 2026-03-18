import React from 'react'

const Radio = ({dado,...props}) => {
  return (
      <label key={dado}>
        <input type="radio" {...props} />
        {dado}
      </label>
  )
}

export default Radio
