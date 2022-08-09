import React from 'react'
import { Wrap } from './style'
import nextPng from '../../../assets/images/next.png'
import prevPng from '../../../assets/images/prev.png'
import { getBrief } from '../../../api/api'
import { useQuery } from '@tanstack/react-query'
import { Link, useParams } from 'react-router-dom'

const Arrows = () => {
  const { data } = useQuery(['brief'], getBrief)
  const params = useParams()

  const getPart = (direction) => {
    const currentIndex = data?.brief?.findIndex(
      (item) => item.id === +params.id
    )

    const length = data?.brief?.length
    const currIndexPlusDir = currentIndex + direction

    if (currIndexPlusDir === length) return data?.brief?.[0].id

    if (currIndexPlusDir < 0) return data?.brief?.[length - 1].id

    return data?.brief?.[currIndexPlusDir].id
  }

  return (
    <Wrap>
      {arrows.map((item) => (
        <Link to={`/brief/${getPart(item.direction)}`}>
          <img src={item.icon} alt={item.alt} />
        </Link>
      ))}
    </Wrap>
  )
}

const arrows = [
  {
    key: 0,
    icon: prevPng,
    direction: -1,
    alt: 'prev',
  },
  {
    key: 1,
    icon: nextPng,
    direction: 1,
    alt: 'next',
  },
]

export default Arrows
