import React from 'react'

const TextArea = ({label, id, ...props}) => {
  return (
    <div>
        <label htmlFor={id}>{label}</label>
        <textarea id={id} {...props} />
    </div>
  )
}

export default TextArea
