import React from 'react'

function InputText({id, label,...props}) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
    </div>
  )
}

export default InputText
