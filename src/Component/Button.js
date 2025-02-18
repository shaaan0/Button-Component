import React from 'react'
import '../css/style.css'

function Button({color, size, children}) {
  return (
    <>
    <button className={`button button-${color} button-${size}`}>{children}</button>
    </>

  )
}

export default Button