import React from 'react'
import "./style.scss"

function CommonButton({ children }) {
  return (
    <div className="commonButton">
      {children}
    </div>
  )
}

export default CommonButton