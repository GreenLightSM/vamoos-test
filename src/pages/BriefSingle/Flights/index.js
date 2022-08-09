import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getBrief } from '../../../api/api'
import Label from '../label'
import planePng from '../../../assets/images/plane.png'
import { Grid, Text } from '../Flight/style'
import FlightItem from '../Flight/index'

const Flights = ({ item }) => {
  const { data } = useQuery(['brief'], getBrief)

  const flightAlerts = item?.flightIds?.map((item) => {
    return data?.flightAlerts?.find((flightAlert) => flightAlert.id === item)
  })

  return (
    <>
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
    </>
  )
}

export default Flights
