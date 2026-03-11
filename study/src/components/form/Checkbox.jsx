import React from 'react'

const Checkbox = ({texto, ...props}) => {
  return (
    <label>
        <input type="checkbox" {...props} />
        {texto}
    </label>
  )
}

export default Checkbox
