import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Description, Image, Title, Wrap, Row } from './style'
import { useQuery } from '@tanstack/react-query'
import { getBrief } from '../../api/api'
import locationPng from '../../assets/images/location.png'
import docPng from '../../assets/images/google-docs.png'
import planePng from '../../assets/images/plane.png'
import loaderSvg from '../../assets/images/loader.svg'
import nextPng from '../../assets/images/next.png'
import prevPng from '../../assets/images/prev.png'
import Label from './label'
import FlightItem from './Flight'
import { Grid, Text } from './Flight/style'
import EmptyBrief from '../EmptyBrief'

const BriefSingle = () => {
  const params = useParams()
  const { data, isLoading } = useQuery(['brief'], getBrief)
  const [imageLoading, setImageLoading] = useState(false)

  const item = data?.brief?.find((item) => item.id === +params.id)

  useEffect(() => {
    setImageLoading(true)
  }, [params.id])

  if (!item && !isLoading) return <EmptyBrief notFound />

  const flightAlerts = item?.flightIds?.map((item) => {
    return data?.flightAlerts?.find((flightAlert) => flightAlert.id === item)
  })

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
      <Title>
        {item?.headline}{' '}
        <div>
          <Link to={`/brief/${getPart(-1)}`}>
            <img src={prevPng} alt='prev' />
          </Link>
          <Link to={`/brief/${getPart(+1)}`}>
            <img src={nextPng} alt='next' />
          </Link>
        </div>
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
      <Label text='Documents:' icon={docPng} alt='documents' />
      <div style={{ paddingLeft: 20, margin: '15px 0' }}>
        {item?.documents?.map((item) => (
          <a href={item.attachment.fileUrl} target='_blank' key={item.id}>
            {item.name}
          </a>
        ))}
      </div>
      <Label
        text={flightAlerts?.length > 0 ? 'Flights:' : 'Flights: no flights'}
        icon={planePng}
        alt='plane'
      />
      {flightAlerts?.length > 0 && (
        <Grid>
          <Text>Departure</Text>
          <Text>Arrival</Text>
          <Text>Status</Text>
        </Grid>
      )}

      {flightAlerts?.map((arr) => {
        return arr.flights.map((item) => (
          <FlightItem item={item} key={item.id} />
        ))
      })}
    </Wrap>
  )
}

export default BriefSingle
