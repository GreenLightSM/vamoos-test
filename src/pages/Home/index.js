import React from 'react'
import { Outlet } from 'react-router-dom'
import Container from '../../components/Container/index'

const Home = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  )
}

export default Home
