import React from 'react'
import TripSelector from './TripSelector'

const FlightSearch = () => {
  return (
    <div className='flight-search-container'>
        <div className='flight-content'>
        <div className='flight-title'></div>
        <div className='flight-image'></div>
        </div>

       
    <div className='flight-search'>
      <TripSelector/>
    </div>
    </div>
  )
}

export default FlightSearch