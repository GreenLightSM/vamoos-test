import React from 'react'
import Menu from '../Menu'
import { Wrap } from './style'

const Container = ({ children }) => {
  return (
    <Wrap>
      <Menu />
      {children}
    </Wrap>
  )
}

export default Container
