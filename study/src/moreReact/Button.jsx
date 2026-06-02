import React from 'react'

const Button = (props) => {
  return (
    <button
        style={{
            margin: props.margin, 
            width: `${props.width}px`, 
            height: `${props.height}px`, 
            backgroundColor: props.backgroundColor
        }}
        {...props}
    >{props.text}</button>
  )
}

export default Button
