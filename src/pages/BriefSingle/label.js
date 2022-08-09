import React from 'react'
import { LabelS } from './style'

const Label = ({ text, icon, alt }) => {
  return (
    <LabelS>
      {icon && <img src={icon} alt={alt} />}
      {text}
    </LabelS>
  )
}

export default Label
