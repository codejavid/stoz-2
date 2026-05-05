import React from 'react'

const Button = ({children, version, type, isDiabled}) => {
  return (
    <button className={`btn btn-${version}`} type={type} disabled={isDiabled}>
        {children}
    </button>
  )
}

export default Button