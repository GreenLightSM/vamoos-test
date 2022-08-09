import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Description, Image, Title, Wrap, Row } from './style'
import { useQuery } from '@tanstack/react-query'
import { getBrief } from '../../api/api'
import locationPng from '../../assets/images/location.png'
import docPng from '../../assets/images/google-docs.png'
import loaderSvg from '../../assets/images/loader.svg'
import Label from './label'
import EmptyBrief from '../EmptyBrief'
import Arrows from './Arrows'
import Flights from './Flights'

const BriefSingle = () => {
  const params = useParams()
  const { data, isLoading } = useQuery(['brief'], getBrief)
  const [imageLoading, setImageLoading] = useState(false)

  const item = data?.brief?.find((item) => item.id === +params.id)

  useEffect(() => {
    setImageLoading(true)
  }, [params.id])

  if (!item && !isLoading) return <EmptyBrief notFound />

  return (
    <Wrap>
      <Title>
        {item?.headline} <Arrows />
      </Title>
      {imageLoading && <img src={loaderSvg} alt='loader' />}
      <Image
        src={item?.dailyPhoto}
        alt='daily-photo'
        onLoad={() => setImageLoading(false)}
        style={{ display: imageLoading ? 'none' : 'block' }}
      />
      <Description>{item?.shortInformation}</Description>
      {item?.location?.name && (
        <Row style={{ marginBottom: 15 }}>
          <Label text='Location:' icon={locationPng} alt='location' />
          {item?.location?.name}
        </Row>
      )}
      <Label
        text={
          item?.documents?.length > 0 ? 'Documents:' : 'Documents: no documents'
        }
        icon={docPng}
        alt='documents'
      />
      <div style={{ paddingLeft: 20, margin: '15px 0' }}>
        {item?.documents?.map((item) => (
          <a href={item.attachment.fileUrl} target='_blank' key={item.id}>
            {item.name}
          </a>
        ))}
      </div>
      <Flights item={item} />
    </Wrap>
  )
}

export default BriefSingle
