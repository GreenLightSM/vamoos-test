import React from 'react'
import Label from '../label'
import { Grid, Text } from './style'
import LabelText from './labelText'

const FlightItem = ({ item }) => {
  return (
    <Grid>
      <Label
        text={
          <LabelText
            cityName={item.departure.cityName}
            date={item.departure.scheduled}
          />
        }
        alt='departure'
      />
      <Label
        text={
          <LabelText
            cityName={item.arrival.cityName}
            date={item.arrival.scheduled}
          />
        }
        alt='arrival'
      />
      <Text style={{ color: item.status === 'Cancelled' ? 'red' : 'green' }}>
        {item.status}
      </Text>
    </Grid>
  )
}

export default FlightItem
