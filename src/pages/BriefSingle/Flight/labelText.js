import moment from 'moment'
import React from 'react'

const LabelText = ({ cityName, date }) => {
  const dateString = moment.unix(date).format('MM-DD-YYYY HH:mm')

  return (
    <div>
      <div>{cityName}</div>
      <div
        style={{
          color: 'grey',
          fontFamily: 'var(--light)',
          fontSize: 14,
          marginTop: 5,
        }}
      >
        {dateString}
      </div>
    </div>
  )
}

export default LabelText
