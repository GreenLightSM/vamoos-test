import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { Hamburger, Item, List, Title, Wrap } from './style'
import { getBrief } from '../../api/api'
import loaderSvg from '../../assets/images/loader.svg'

const Menu = () => {
  const { data, isLoading } = useQuery(['brief'], getBrief)
  const [isOpened, setIsOpened] = useState(false)

  return (
    <Wrap isOpened={isOpened}>
      <Hamburger onClick={() => setIsOpened(!isOpened)} isOpened={isOpened}>
        <div />
        <div />
        <div />
      </Hamburger>
      <Title>Vamoos</Title>
      <List loading={isLoading.toString()}>
        {isLoading && <img src={loaderSvg} alt='loader' />}
        {data?.brief?.map((item) => (
          <Item
            to={`${item.id}`}
            key={item.id}
            onClick={() => setIsOpened(false)}
          >
            {item.headline}
          </Item>
        ))}
      </List>
    </Wrap>
  )
}

export default Menu
