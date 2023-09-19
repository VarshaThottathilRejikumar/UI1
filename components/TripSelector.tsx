'use client'
import React, { useState } from 'react'
import RoundTrip from './RoundTrip';
import OneWay from './OneWay';
import MultiCity from './MultiCity';


    const TripSelector = () => {
        const [tripType, setTripType] = useState('roundTrip');
      
        const handleTripTypeChange = (e: { target: { value: React.SetStateAction<string> } }) => {
          setTripType(e.target.value);
        };
  return (
    <div className="trip-selector">
      <div className="radio-buttons">
        {/* Radio buttons here */}
        <div className='roundTrip'>
              <input
                type='radio'
                name='trip'
                value='roundTrip'
                checked={tripType === 'roundTrip'}
                onChange={handleTripTypeChange}
              />
              <label className='ml-1'>Round-trip</label>
            </div>

            <div className='oneWay'>
              <input
                type='radio'
                name='trip'
                value='oneWay'
                checked={tripType === 'oneWay'}
                onChange={handleTripTypeChange}
              />
              <label className='ml-1'>OneWay</label>
            </div> 

            <div className='multiCity'>
              <input
                type='radio'
                name='trip'
                value='multiCity'
                checked={tripType === 'multiCity'}
                onChange={handleTripTypeChange}
              />
              <label className='ml-1'>Multi-City</label>
            </div>
            
      </div>
      {tripType === 'roundTrip' && <RoundTrip tripType={''} />}
      {tripType === 'oneWay' && <OneWay tripType={''} />}
      {tripType === 'multiCity' && <MultiCity tripType={''} />}
    </div>
  )
}

export default TripSelector