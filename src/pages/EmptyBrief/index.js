import React from 'react'
import { Title, Wrap } from './style'

const EmptyBrief = ({ notFound }) => {
  return (
    <Wrap>
      <Title notFound={notFound}>
        {notFound
          ? 'Part with such id not found :('
          : 'Choose part to view info'}
      </Title>
    </Wrap>
  )
}

export default EmptyBrief
