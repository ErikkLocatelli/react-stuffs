import React from 'react'

const Radio = ({dados,...props}) => {
  return (
    <>
    {dados.map((dado) => (
      <label key={dado}>
        <input type="radio" {...props} />
        {dado}
      </label>
    ))}
    </>
  )
}

export default Radio
