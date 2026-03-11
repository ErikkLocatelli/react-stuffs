import React from 'react'

const Select = ({data, ...props}) => {
  return (
    <select {...props}>
      <option value="" disabled>Selecione algo</option>
      {data.map((prod, index) => (
          <option key={index}>{prod}</option>
      ))}
    </select>
  )
}

export default Select
